<?php
/*
サービス公開時とそうでない時で記述をいちいち書き換えるのは面倒な上にミスの元なので、極力最小の労力で設定が書き換わるようにしておくのが望ましい。以下はURLがlocalhostか否かで設定を切り替える例。
*/
$is_develop = $_SERVER['HTTP_HOST'] === 'localhost';
if($is_develop){
      error_reporting(E_ALL);
        ini_set('display_errors', '1');
}else{
      error_reporting(E_ALL ^ E_NOTICE);
        ini_set('display_errors', '0');
          }
          /**************/

require_once('common/htmlESC.php');
require_once('common/config.php');
require_once('common/connectDb.php');
//firePHP　Console出力用
require_once('common/FirePHPCore/FirePHP.class.php');
require_once('common/FirePHPCore/fb.php');
////////fireBug 以下例
//FB::log('test');　//ログ出力
//FB::info('test'); //インフォ出力
//FB::warn('test'); //警告出力
// FB::error('test'); //エラー出力

session_start();

if (empty($_GET['code'])) {
    // 認証前の処理

    // 認証ダイアログの作成
    // CSRF対策
    $_SESSION['state'] = sha1(uniqid(mt_rand(), true));
    
    $params = array(
        'client_id' => APP_ID,
        'redirect_uri' => SITE_URL.'redirect.php',
        'state' => $_SESSION['state'],
        'approval_prompt' => 'force',
        'scope' => 'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email',
        'response_type' => 'code'
    );
    
    // googleへ飛ばす
    $url = 'https://accounts.google.com/o/oauth2/auth?'.http_build_query($params);
    header('Location: '.$url);
    exit;
}else{
		 //認証後の処理
		  //CSRF対策で$_SESSION['state']のチェック
		  if($_SESSION['state'] != $_GET['state']){
		  	echo "不正な処理が行われました";
		  	exit;
		  }
		
		 //access_tokenを取得
		$params = array(
			'client_id'=>APP_ID,
			'client_secret'=>APP_SECRET,
			'code'=> $_GET['code'],
			'redirect_uri'=> SITE_URL.'redirect.php',
			'grant_type'=>'authorization_code'
		);
		$url = 'https://accounts.google.com/o/oauth2/token';
		$curl = curl_init();
		curl_setopt($curl, CURLOPT_URL, $url);
		curl_setopt($curl, CURLOPT_POST, 1);
		curl_setopt($curl, CURLOPT_POSTFIELDS, http_build_query($params));
		curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
		
		$rs = curl_exec($curl);
		curl_close($curl);
		$json = json_decode($rs);

		//var_dump($json);exit;
		 //ユーザー情報
		$url ='https://www.googleapis.com/oauth2/v1/userinfo?access_token='.$json->access_token;
		$me= json_decode(file_get_contents($url));
		//var_dump($me);exit;
		//DBへ格納
		$dbh = connectDb(DNS, DB_USER, DB_PASSWORD);
		$sql="select * from users where google_user_id = id limit 1";
		$stmt = $dbh->prepare($sql);
		$stmt =execute(array(":id"=> $me->id));
		$user = $stmt->fetch();
 //ログイン処理
 //ホーム画面へ飛ばす
}

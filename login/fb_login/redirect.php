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

session_start();

if(empty($_GET['code'])){
	//認証の準備
	$_SESSIOTN['state'] = sha1(uniqid(at_rand(), true));
	$params = array(
		'client_id'=> SITE_URL.'redirect.php', 
		'state'=> $_SESSION['state'], 
		'scope'=> 'user_website, friends_website'
	);
	$url = "https://www.facebook.com/dialog/oauth?".http_build_query($params);
	// facebookに一旦飛ばす
}else{
	//認証後の処理
	// ユーザー情報の取得
	// 	DB処理
	// 	ログイン処理
	// 	index.php
}

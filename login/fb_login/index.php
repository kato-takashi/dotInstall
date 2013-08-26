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
//ログインチェック
if(empty($_SESSION['user'])){
	header('Location: '.SITE_URL.'login.php');
	exit;
}
//友達情報の取得
$url = "https://graph.facebook.com/me/friends?access_token=".$_SESSION['user']['facebook_access_token'];
$friends = json_decode(file_get_contents($url));
//var_dump($friends);
//exit;
///////
$title='facebook Friends';

?>

<!DOCTYPE html>
<html lang="ja">
	<head>
	<meta chrset="UTF-8">
	<title><?php echo h($title)?></title>
	</head>
	<body>
		<h1><?php echo h($title)?></h1>
			<div>
				<img src="<?php echo h($_SESSION['user']['facebook_picture']); ?>"/>
			</div>
			<p><?php echo h($_SESSION['user']['facebook_name']); ?>としてログインしています。</p>
			<p><a href="logout.php">Log Out</a></p>
			<p>あなたの友達は現在<?php echo h(count($friends->data));?></p>
		<ul>
			<?php foreach ($friends->data as $friend):?>
				<li><?php echo h($friend->name);?></li>
			<?php endforeach; ?>
			
		</ul>
	</body>
</html>
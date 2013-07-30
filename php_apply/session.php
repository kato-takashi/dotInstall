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

$title='SETTIONを使ってみよう';
session_start();
$_SESSION['userName']="takashi";
//unset($_SESSION['userName']); セッションの削除
if(isset($_SESSION['userName'])){
echo $_SESSION['userName'];
}
?>
<!DOCTYPE html>
<html lang="ja">
	<head>
		<meta charset="UTF-8">
		<title><?php echo $title; ?></title>
	</head>
	<body>
	</body>
</html>

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

$title='PHP掲示板';
require_once('common/htmlESC.php');
$dataFile = 'bbs.dat';

if($_SERVER['REQUEST_METHOD']=='POST' && 
	isset($_POST['message'])&& 
	isset($_POST['user'])){
	
	$message = trim($_POST['message']);
	$user = trim($_POST['user']);
	
	if(!$message =='' ){
		$user = ($user==='')? '名無しさん' : $user;
		$message = str_replace("\t", ' ', $message);
		$user = str_replace("\t", ' ', $user);
		$postedAt = date('Y-m-d H:i:s');
		$newData = $message."\t".$user."\t".$postedAt."\n";
		
		$fp = fopen($dataFile, 'a');
		fwrite($fp, $newData);
		fclose($fp);
	}
}

?>

<!DOCTYPE html>
<html lang="ja">
	<head>
	<meta chrset="UTF-8">
	<title><?php echo h($title)?></title>
	</head>
	<body>
		<h1><?php echo h($title)?></h1>
		<form action="" method="post">
			message: <input type="text" name="message">
			user: <input type="text" name="user">
			<input type="submit" value="投稿">
		</form>
		<h2>投稿一覧（0件）</h2>
		<ul>
			<li>投稿がありません。</li>
		</ul>
	</body>
</html>
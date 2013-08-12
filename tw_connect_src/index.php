<?php
require_once('config.php');
require_once('codebird.php');
require_once('htmlESC.php');
$title ='Twitterアカウントでログイン';
?>

<!DOCUTYPE html>
<html lang='ja'>
	<head>
		<meta chraset='UTF-8'>
		<title><?php echo h($title); ?> ！</title>
	</head>
	<body>
		<h1><?php echo h($title);?>！</h1>
		<p>現在<?php echo h($title);?>してるよ！</p>
		<p><a href="logout.php">【ログアウト】</a></p>
		<ul>
			<li></li>
		</ul>
	</body>
</html>
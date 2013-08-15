<?php
require_once('./common/htmlESC.php');
$title ='ログイン 画面';
?>
<!DOCUTYPE html>
<html lang='ja'>
	<head>
		<meta chraset='UTF-8'>
		<title><?php echo h($title); ?> ！</title>
	</head>
	<body>
		<h1><?php echo h($title);?>！</h1>
		<p><a href="callback.php">【twitter Login】</a></p>
	</body>
</html>
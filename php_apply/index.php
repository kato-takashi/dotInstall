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

$title='PHPでMySQL接続';

// データベースへの接続
// MySQL

try {
	$mysql = 'mysql:host=localhost;dbname=blog_app';
	$userName = 'dbuser001';
	$pass = 'taka4';
    $dbh = new PDO($mysql, $userName, $pass);
} catch (PDOException $e) {
    var_dump($e->getMessage());
    exit;
}

//echo "success!";
//処理
/*
$sql = "select * from users";
//$sqlCount = "select count(*) from users";
$sqlCount = "select count(*) from users";
$stmt = $dbh->query($sql);
var_dump($stmt->fetchAll());
foreach($stmt->fetchAll() as $user){
	var_dump($user['name']);
}
echo $dbh->query($sqlCount)->fetchColumn() . "records found";
// 切断
*/
/*
$stmt = $dbh->prepare("insert into users (name, email, password) values(?, ?, ?)");
$stmt->execute(array("n", "e", "p"));
*/
$stmt = $dbh->prepare("insert into users (name, email, password) values(:name, :email, :password)");
$stmt->execute(array(":name"=>"n2", ":email"=>"e2", ":password"=>"p2"));
echo "done";

$dbh = null;

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

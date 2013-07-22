
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
//呼び出し
require_once('calendar.php');

//html出力をエスケープ
function h($s){
    return htmlspecialchars($s, ENT_QUOTES, 'UTF-8');
    }
$title = "PHPでカレンダー";
// 今月のカレンダー
//timeStamp
$ym = isset($_GET['ym'])? $_GET['ym']:date("Y-m");

//インスタンスの作成
$cal = new Calendar($ym);
$cal -> create(); 
?>

<html lang="ja">
<head>
<meta charset="utf-8">
<link rel="stylesheet" href="css/style.css">
<title>
<?php print($title);  ?>
</title>
</head>
<body>
<h1><?php print($title);  ?></h1>
<table>
<thead>
<tr>
<th><a href="?ym=<?php echo h($cal->prev());?>">&laquo;</a></th>
<th colspan="5"><?php echo h($cal->yearMonth());?></th>
<th><a href="?ym=<?php echo h($cal->next()); ?>">&raquo;</a></th>
</tr>
<tr>
<th>Sun</th>
<th>Mon</th>
<th>Tue</th>
<th>Wed</th>
<th>Thu</th>
<th>Fri</th>
<th>Sat</th>
</tr>
</thead>
<tbody>
<?php
foreach ($cal->getWeeks as $week) {
    echo $week;
}
?>
</tbody>
</table>
</body>
</html>

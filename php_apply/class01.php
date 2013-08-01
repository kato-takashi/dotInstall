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

$title='クラスを使ってみよう　継承';
class User {
	public $name;
	public $email;
	public function __construct($name, $email){
		$this->name = $name;
		$this->email = $email;
	}
	public function sayHi(){
		echo "hi! my name is ".$this->name;
	}
	
}

class superUser extends User {
	public function superSayHi(){
		echo "HIIIIIIIIIIIIIIIiiiiiiii! my name is ".$this->name;
	}
	
}

$tom = new User("tom", "dummy01@dymmy.com");
$kim = new superUser("kim", "dummy01@dymmy.com");

$kim->superSayHi();
echo $kim->name;
?>
<!DOCTYPE html>
<html lang="ja">
	<head>
		<meta charset="UTF-8">
		<title><?php echo $title; ?></title>
	</head>
	<body>
	<?php echo $kim->sayHi(); ?>
	</p>
	</body>
</html>

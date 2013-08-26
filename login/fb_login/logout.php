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
$_SESSION = array();
//sessionを空にする
if(isset($COOKIE[session_name()])){
	setcookie(session_name(), '', time()-86400, '/test/dotinstall/fb_login/fb_login/');
}
session_destroy();

header('Location: '.SITE_URL);

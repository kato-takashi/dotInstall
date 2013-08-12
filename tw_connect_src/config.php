<?php
/*
アプリの設定
*/
$url='/Applications/MAMP/htdocs/test/dotinstall/tw_connect_php/pass.php';
//$url='http://'.$_SERVER['HTTP_HOST'].dirname($_SERVER['PHP_SELF']).'/pass.php';
require_once($url);

define('DSN', 'mysql:host=localhost;dbname=di_tw_connect_php');
define('DB_USER', $usrName);
define('DB_PASSWORD', $pass);
define('CONSUMER_KEY', $C_KEY);
define('CONSUMER_SECRET', $C_SECRET);

define('SITE_URL', 'http://localhost/test/dotinstall/tw_connect_php/tw_connect_src/');

error_reporting(E_ALL & ~E_NOTICE);

session_set_cookie_params(0, '/tw_connect_php/');
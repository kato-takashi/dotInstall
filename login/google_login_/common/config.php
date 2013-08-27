<?php
/*
アプリの設定
*/
$url='/Applications/MAMP/htdocs/test/dotinstall/google_login/google_pass.php';
//$url='http://'.$_SERVER['HTTP_HOST'].dirname($_SERVER['PHP_SELF']).'/pass.php';
require_once($url);

define('DNS', 'mysql:host=localhost;dbname=dotinstall_google_connect_php');
define('DB_HOST', 'localhost');
define('DB_USER', $usrName);
define('DB_PASSWORD', $pass);
define('APP_ID', $C_KEY);
define('APP_SECRET', $C_SECRET);
define('DB_NAME', $dbName);
define('SITE_URL', 'http://localhost/test/dotinstall/google_login/google_login_/');

error_reporting(E_ALL & ~E_NOTICE);

session_set_cookie_params(0, '/test/dotinstall/google_login/google_login_/');

//var_dump($dbName);
//exit;

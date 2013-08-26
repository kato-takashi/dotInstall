<?php
/*
アプリの設定
*/
$url='/Applications/MAMP/htdocs/test/dotinstall/fb_login/fb_pass.php';
//$url='http://'.$_SERVER['HTTP_HOST'].dirname($_SERVER['PHP_SELF']).'/pass.php';
require_once($url);


define('DB_HOST', 'localhost');
define('DB_USER', $usrName);
define('DB_PASSWORD', $pass);
define('APP_ID', $C_KEY);
define('APP_SECRET', $C_SECRET);
define('DB_NAME', $dbName);
define('SITE_URL', 'http://localhost/test/dotinstall/fb_login/fb_login/');

error_reporting(E_ALL & ~E_NOTICE);

session_set_cookie_params(0, '/test/dotinstall/fb_login/fb_login/');
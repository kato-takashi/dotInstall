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
require_once('./common/config.php');
require_once('./common/codebird.php');
require_once('./common/redirect.php');
require_once('./common/htmlESC.php');

session_start();


\Codebird\Codebird::setConsumerKey(CONSUMER_KEY, CONSUMER_SECRET);
$cb = \Codebird\Codebird::getInstance();





if (! isset($_GET['oauth_verifier'])) {
    // gets a request token
    $reply = $cb->oauth_requestToken(array(
        'oauth_callback' => 'http://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI']
    ));

    // stores it
    $cb->setToken($reply->oauth_token, $reply->oauth_token_secret);
    $_SESSION['oauth_token'] = $reply->oauth_token;
    $_SESSION['oauth_token_secret'] = $reply->oauth_token_secret;

    // gets the authorize screen URL
    $auth_url = $cb->oauth_authorize();
    header('Location: ' . $auth_url);
    die();

} else {
    // gets the access token
    $cb->setToken($_SESSION['oauth_token'], $_SESSION['oauth_token_secret']);
    $reply = $cb->oauth_accessToken(array(
        'oauth_verifier' => $_GET['oauth_verifier']
    ));
    // $_SESSION['oauth_token'] = $reply->oauth_token;
    // $_SESSION['oauth_token_secret'] = $reply->oauth_token_secret;
    $cb->setToken($reply->oauth_token, $reply->oauth_token_secret);
    
    $me = $cb->account_verifyCredentials();
    
     var_dump($me);
     exit;
    
    // データベースに格納
    
    
    // ログイン処理
    
    // ホームに飛ばす
   
    
    
}
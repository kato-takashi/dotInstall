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
//$cb->setToken(ACCESS_TOKEN_, ACCESS_SECRET_);

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
    var_dump($reply->oauth_token);
    exit;
    
/*     // データベースに格納
    try {
        $dbh = new PDO(DSN, DB_USER, DB_PASSWORD);
    } catch (PDOException $e) {
        echo $e->getMessage();
        exit;
    }
    
    $sql = "select * from users where tw_user_id = :id limit 1";
    $stmt = $dbh->prepare($sql);
    $stmt->execute(array(":id" => $me->id_str));
    $user = $stmt->fetch();
    
    if (!$user) {
        $sql = "insert into users 
                (tw_user_id, tw_screen_name, tw_access_token, tw_access_token_secret, created, modified) 
                values 
                (:tw_user_id, :tw_screen_name, :tw_access_token, :tw_access_token_secret, now(), now())";
        $stmt = $dbh->prepare($sql);
        $params = array(
            ":tw_user_id" => $me->id_str,
            ":tw_screen_name" => $me->screen_name,
            ":tw_access_token" => $reply->oauth_token,
            ":tw_access_token_secret" => $reply->oauth_token_secret
        );
        $stmt->execute($params);
        
        $myId = $dbh->lastInsertId();
        $sql = "select * from users where id = :id limit 1";
        $stmt = $dbh->prepare($sql);
        $stmt->execute(array(":id" => $myId));
        $user = $stmt->fetch();
    }
    
    // ログイン処理
    if (!empty($user)) {
        // セッションハイジャック対策
        session_regenerate_id(true);
        $_SESSION['me'] = $user;
    }
    
    // ホームに飛ばす
    redirect('index.php'); */
    
}

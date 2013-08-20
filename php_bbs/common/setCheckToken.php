<?php
function setToken(){
	$token = sha1(uniqid(mt_rand(), true));
	$_SESSION['token'] = $token;
}

function checkToken(){
	if(empty($_SESSION['token']) || ($_SESSION['token'] != $_POST['token']) ){
		echo "不正なPOSTが行われました。！！";
		exit;
	}
} 
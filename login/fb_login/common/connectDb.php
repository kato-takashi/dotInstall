<?php
function connectDb($DNS, $DB_USER, $DB_PASSWORD){
	try{
		return new PDO($DNS, $DB_USER, $DB_PASSWORD);
	}catch(PDOException $e){
		echo $e->getMessage();
		exit;
	}
}
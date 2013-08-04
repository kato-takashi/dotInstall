<?php 
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


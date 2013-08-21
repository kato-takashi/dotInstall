<?php
function _date_format($datetime, $format='yyyy/MM/dd'){
	$ts = strtotime($datetime);
	print(date($format, $ts));
}
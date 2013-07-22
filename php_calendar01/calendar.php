<?php
//calendar class
$timeStamp = strtotime($ym."-01");
if($timeStamp === false){
        $timeStamp = time();
    }


// 最終日？

$lastDay = date("t", $timeStamp);

// 1日は何曜日？
// 0: Sun ... 6: Sat

$youbi = date("w", mktime(0,0,0,date("m",$timeStamp),1,date("Y",$timeStamp)));
$prev = date("Y-m", mktime(0,0,0,date("m",$timeStamp)-1,1,date("Y",$timeStamp)));
$next = date("Y-m", mktime(0,0,0,date("m",$timeStamp)+1,1,date("Y",$timeStamp)));
//var_dump($lastDay);
//var_dump($youbi);

//exit;

$weeks = array();
$week = '';

$week .= str_repeat('<td></td>', $youbi);

for ($day = 1; $day <= $lastDay; $day++, $youbi++) {
    $week .= sprintf('<td class="week_%d">%d</td>', $youbi % 7, $day);

    if ($youbi % 7 == 6 OR $day == $lastDay) {
        if ($day == $lastDay) {
            $week .= str_repeat('<td></td>', 6 - ($youbi % 7));
        }
        $weeks[] = '<tr>' . $week . '</tr>';
        $week = '';
    }
}


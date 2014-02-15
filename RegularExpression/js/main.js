// 正規表現
/*. -> 任意の一文字
^ ->行頭
$ ->行末*/
 
var s ='@taguchi, @fkoji, @dotinstall';
var rs = s.match(/@dotinstall$/);

if(rs){
	console.log("マッチしました！");
}else{
	console.log("あれっ？");
}

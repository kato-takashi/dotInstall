// 正規表現
/*　a? 0 or 1 -> あるかないか null or a
a* 0 or more -> null or aaaa ....
a+ 1 or more -> a, aaa, aaa....
*/
 
var s ='@taguchi, @fkoji, @dotinstall';
var rs = s.match(/@dotinstall$/);

if(rs){
	console.log("マッチしました！");
}else{
	console.log("あれっ？");
}

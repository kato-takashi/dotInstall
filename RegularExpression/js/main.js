// 正規表現
/*　0{2} -> 直前の文字の繰り返す回数 -> 00 match
0{2,} -> 00 000 000000 ....
0{2, 4} -> 00 or 000 or 0000

[a-z]{5} 5桁の英語　abxxb
[a-z]{3, 6} 3三文字以上6文字以内

*/
 
var s ='@taguchi, @fkoji, @dotinstall';
var rs = s.match(/@dotinstall$/);

if(rs){
	console.log("マッチしました！");
}else{
	console.log("あれっ？");
}

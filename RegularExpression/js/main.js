// 正規表現
// メタ文字
// [abc] a or b or c
//[a-z] a-z どれか
//[^abc] not
//
 
var s ='@teguchi, @fkoji, @dotinstall';
var rs = s.match(/t[^ao]guchi/);

if(rs){
	console.log("マッチしました！");
}else{
	console.log("あれっ？");
}

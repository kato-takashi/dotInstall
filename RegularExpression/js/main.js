// 正規表現
/*　a? 0 or 1 -> あるかないか null or a
a* 0 or more -> null or aaaa ....
a+ 1 or more -> a, aaa, aaa....

(abc)* -> abc, abcabc... null or abcabc
 | -> or 

\n -> 改行
\t -> タブ
\d ->　数字 [0-9]
\w ->　英数字_ [A-Za-z0-9_]

フラグ
 i -> 大文字小文字を区別しない　tagchu TAGUCHI
 g -> すべてのマッチした要素を配列で返す
 m -> 複数業に対応させる　改行も含めてマッチ
*/
 
var s ='@taguchi, @fkoji, @dotinstall';
var rs = s.match(/a/g);


if(rs){
	console.log(rs.length);
}else{
	console.log("あれっ？");
}

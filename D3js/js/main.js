//D3.js
// 1 要素を指定して　select selectAll
// 2 設定したり、取得したり text arrt
/*
var p = d3.select("body").selectAll("p");
p.text("hello from d3!")
	.style({
		"font-size": "28px",
		"font-weight": "bold"
	});
*/

var p = d3.select("body").selectAll("p");
p.style("font-size", function(){
	return Math.floor(Math.random()*29 )+ "px";
});
//alert(p.style("font-size"));
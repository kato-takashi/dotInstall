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
// var dataset = [12, 24, 36, 48];
var dataset = [12, 24];
var p = d3.select("body").selectAll("p");
/*dataをつかった瞬間に仮想領域が作られる　->
update: 対応する要素がある場合 -> text, style
enter:　対応する要素が足りない場合 -> append
exit:　対応する要素が余った場合 -> remove

*/

var update  = p.data(dataset);
var exit = update.exit();

update.text(function(d){
	return "update: "+ d;
});

exit.style("color", "red");

/*var enter = update.enter();

update.text(function(d){
	return "update: "+ d;
});

enter.append('p').text(function(d){
	return "enter: " +d
});*/

//d3.select("body").append('p').text("hello from  append").remove();
//alert(p.style("font-size"));
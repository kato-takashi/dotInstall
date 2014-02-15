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
var dataset = [12, 24, 36];
var p = d3.select("body").selectAll("p");
/*
p.data(dataset).text(function(d){
	return d;
});
*/
p.data(dataset).text(function(d, i){
	return i + "番目は" + d + 'です。';
});

//d3.select("body").append('p').text("hello from  append").remove();
//alert(p.style("font-size"));
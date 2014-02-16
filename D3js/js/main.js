//D3.js
// 1 要素を指定して　select selectAll
// 2 設定したり、取得したり text arrt

var dataset = [11, 25, 45, 30, 33];
var w = 500;
var h = 200;


var num1 = 50;
var num2 = 100;


var svg = d3.select("body").append("svg").attr({width:w, height:h});
svg.selectAll("circle")
			.data(dataset)
			.enter()
			.append("circle")
			.transition()
			.delay(function(d, i){
				return i*300;
			})
			.duration(1000)
			.ease("bounce")
			.each("start", function(){
				d3.select(this).attr({
					fill: "green",
					r:0,
					cy: h
				});
			})
			.attr({
				cx: function(d, i){return num1 + (i* num2);},
				cy: h/2,
				r: function(d){return d;},
				fill:"red"
			})
			.each("end", function(d){
				d3.select(this)
				.transition()
				.duration(800)
				.attr({
					fill: "pink",
					r:0,
					cy:0
				});
			});
			
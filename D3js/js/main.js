//D3.js
// 1 要素を指定して　select selectAll
// 2 設定したり、取得したり text arrt

var dataset = [11, 25, 45, 30, 33];
var w = 500;
var h = 200;

var num1 = 20;
var num2 = 100;

var dMin = 0;
var dMax = 50;

// スケールの定義
var xScale = d3.scale.linear()
			.domain([dMin, d3.max(dataset)])
			.range([0, w])
			.nice(); //nice() キリの良い数字にしてくれるよ





var svg = d3.select("body").append("svg").attr({width:w, height:h});

svg.selectAll("rect")
	.data(dataset)
	.enter()
	.append('rect')
	.attr({
		x:0,
		y: function(d, i){return i*25;},
		width: function(d){return xScale(d);},
		height:num1,
		fill:"red"
	});


/*svg.selectAll("circle")
			.data(dataset)
			.enter()
			.append("circle")
			.on("mouseover", function(d){
				d3.select(this).attr("fill", "orange");
			})
			.on("mouseout", function(d){
				d3.select(this).attr("fill", "red");
			})
			.on("click", function(d){
				var rs = d3.select(this).attr("r");
				alert(rs);
				
			})
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
			;*/
			
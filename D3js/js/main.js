//D3.js
// 1 要素を指定して　select selectAll
// 2 設定したり、取得したり text arrt

var dataset = [11, 25, 52, 30, 33];
var w = 500;
var h = 200;
var padding = 20;

var num1 = 20;
var num2 = 100;

var dMin = 0;
var dMax = 50;
var svg = d3.select("body").append("svg").attr({width:w, height:h});


// スケールの定義
var xScale = d3.scale.linear()
			.domain([dMin, d3.max(dataset)])
			.range([padding, w-padding])
			.nice(); //nice() キリの良い数字にしてくれるよ

// 軸の定義
var xAxis = d3.svg.axis()
				.scale(xScale)
				.orient("bottom"); //数字の向き


svg.append("g")
	.attr({
		class: "axis",
		transform: "translate(0, 180)"
	})
	.call(xAxis);

svg.selectAll("rect")
	.data(dataset)
	.enter()
	.append('rect')
	.attr({
		x:padding,
		y: function(d, i){return i*25;},
		width: function(d){return xScale(d)-padding;},
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
			
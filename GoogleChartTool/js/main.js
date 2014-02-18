//google Chart Tool js
google.load("visualization", "1.0", {"packages": ["corechart"]});
google.setOnLoadCallback(drawChart);

function drawChart(){
	// 棒グラフ
	// 1.データを用意する
	var data = new google.visualization.DataTable();
	data.addColumn("string", "年");
	data.addColumn("number", "売上");
	data.addColumn("number", "利益");
	data.addRows([
			["2010", 500, 300],
			["2011", 600, 320],
			["2012", 700, 200],
			["2013", 800, 200],
			["2014", 400, 120],
			["2015", 200, 30],
		]);

	// 2.グラフのオプションを指定する
	var options = {
		title: "業績推移",
		width: 500,
		height: 500,
		isStacked: true
	};
	// 3.描画する
	var chart = new google.visualization.ColumnChart(document.getElementById('chart'));
	chart.draw(data, options);
}
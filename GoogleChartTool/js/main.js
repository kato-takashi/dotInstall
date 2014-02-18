//google Chart Tool js
google.load("visualization", "1.0", {"packages": ["corechart"]});
google.setOnLoadCallback(drawChart);

function drawChart(){
	// 円グラフ
	// 1.データを用意する
	var data = new google.visualization.DataTable();
	data.addColumn("string", "活動");
	data.addColumn("number", "時間");
	data.addRows([
			["睡眠", 8],
			["仕事", 12],
			["読書", 4]
		]);

	// 2.グラフのオプションを指定する
	var options = {
		title: "1日の内訳",
		width: 500,
		height: 500,
		pieSliceText: 'label',
		is3D: true
	};
	// 3.描画する
	var chart = new google.visualization.PieChart(document.getElementById('chart'));
	chart.draw(data, options);
}
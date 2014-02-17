//google Chart Tool js
google.load("visualization", "1.0", {"packages": ["corechart"]});
google.setOnLoadCallback(drawChart);

function drawCart(){
	// 円グラフ
	// 1.データを用意する
	var data = new google.visualization.DataTable();
	data.addColumn("string", "活動");
	data.addColumn("number", "時間");
	data.addRows([
			["睡眠", 12],
			["仕事", 12],
		]);

	// 2.グラフのオプションを指定する
	// 3.描画する
}
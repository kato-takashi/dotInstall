$(function(){
	// console.log("test");
	// キーワードからyoutubeに検索
	var url = "http://gdata.youtube.com/feeds/api/videos
";

	var options = {
		q:encodeURLComponent($("#q").val()),
		alt:"json",
		max-results:10,
		v:3
	};
	// 検索した結果を#listに追加
});
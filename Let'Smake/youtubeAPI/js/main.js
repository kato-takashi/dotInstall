$(function(){
	// console.log("test");
	// キーワードからyoutubeに検索
	// 
	$("#search").click(function(){
		var url = "http://gdata.youtube.com/feeds/api/videos";

	var options = {
		"q":encodeURIComponent($("#q").val()),
		"alt":"json",
		"max-results":10,
		"v":2
	};
	// 検索した結果を#listに追加
	$.get(url, options, function(rs){
		console.log(rs);
	}, "json");	

	});
	
});
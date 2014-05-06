$(function(){
	// console.log("test");
	// キーワードからyoutubeに検索
	// 
	$("#search").click(function(){
		var url = "https://gdata.youtube.com/feeds/api/videos";

	var options = {
		"q":$("#q").val(),
		"alt":"json",
		"max-results":10,
		"v":2
	};
	// 検索した結果を#listに追加
	$.get(url, options, function(rs){
		console.log(rs);
		$('#list').empty();
		for(var i=0; i<rs.feed.entry.length; i++){
			var f = rs.feed.entry[i];
			$("#list").append(
					$('<li class="movie">').append(
							$('<img>').attr('src',f['media$group']['media$thumbnail'][0]['url'])
						).data('video-id', f['media$group']['yt$videoid']['$t'])
				);

		}
	}, "json");	

	});
	
});
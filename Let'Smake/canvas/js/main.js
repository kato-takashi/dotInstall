$(function(){
	var canvas = document.getElementById("mycanvas");
	if(!canvas || !canvas.getContext){
		return false;
	}
	var ctx = canvas.getContext('2d');
	var startX,
		startY,
		x,
		y,
		borderWidth = 10,
		isDrawing = false;

	$('#mycanvas').mousedown(function(e){
		isDrawing = true;
		startX = e.pageX - $(this).offset().left - borderWidth;
		startY = e.pageY - $(this).offset().top - borderWidth;
	})
	.mousemove(function(e){
		if(!isDrawing) return;
		x = e.pageX - $(this).offset().left - borderWidth;
		y = e.pageY - $(this).offset().top - borderWidth;
		ctx.beginPath();
		ctx.moveTo(startX, startY);
		ctx.lineTo(x, y);
		ctx.stroke();
		startX = x;
		startY = y;

	})
	.mouseup(function(e) {
		isDrawing = false;
	})
	.mouseleave(function(e) {
		isDrawing = false;
	});

	$('#penColor').change(function(){
		ctx.strokeStyle = $(this).val();
	});
	$('#penWidth').change(function(){
		ctx.lineWidth = $(this).val();
	});

	$('#erase').click(function() {
		if(!confirm('本当に消去しますか？')) return;
		ctx.clearRect(0, 0, canvas.width, canvas.height);
	});

	$('#save').click(function() {
		var img = $('<img>').attr({
			width:100,
			height:50,
			src: canvas.toDataURL() //ブラウザに依存
		});
		var link = $('<a>').attr({
			href:canvas.toDataURL().replace('image/png', 'application/octet-stream'), //download
			download: new Date().getTime() + '.png' //ブラウザに依存　対応少ない
		});
		$('#gallery').append(link.append(img.addClass('thumbnail')));
		ctx.clearRect(0, 0, canvas.width, canvas.height);
	});
});







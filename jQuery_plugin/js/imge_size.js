//script
$(function(){
	$('#image1').click(function(event) {
		/* Act on the event */
		var msg = $(this).width() + ' x ' + $(this).height();
                $(this).wrap('<div style="position:relative;"></div>');
                var div = $('<div id="txt1">')
                            .text(msg)
                            .css('position', 'absolute')
                            .css('top', '0');
                $(this).after(div);
		//alert('click');
	});
});
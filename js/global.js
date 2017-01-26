$(function() {
	$('.navigationLinks').bind('click',function(event){
		var $anchor = $(this);

		$('html, body').stop().animate({
			scrollLeft: $($anchor.attr('href')).offset().left
		}, 1000,'easeInOutExpo');
        
		event.preventDefault();
	});
});


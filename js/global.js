$(function() {
	$('.navigationLinks').bind('click',function(event){
		var $anchor = $(this);

		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top
		}, 1000,'easeInOutExpo');
        
		event.preventDefault();
	});
});

$(".penguin").animate({
  "marginLeft": "500px"
}, {
  easing: "easein"
});
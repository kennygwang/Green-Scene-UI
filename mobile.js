var screen_height = $(window).height();
var dumb_flag = true;
var thing;

$(document).ready(function(){
	resize_tweet();
	$(window).resize(resize_tweet);

	$('.row').click(function(){
		$($(this).children()[1]).slideToggle(300);
		$($(this).children()[2]).slideToggle(300);
		$('.caption').fadeToggle(300);
		
		if (dumb_flag) {
			$('html, body').animate({
				scrollTop: Math.ceil($('#' + $(this).attr('id')).offset().top) // mathematical rounding errors can cause offset to be inaccurate
			}, 300);
			$('html').css('overflow', 'hidden');
			dumb_flag = !dumb_flag;
		}
		else {
			$('html').css('overflow', 'visible');
			dumb_flag = !dumb_flag;
		}
	});
/*
	$('.full-image').each(function(i){
		//$(this).css('top', 156);
		var value = ( (screen_height/2) - ($($(this)[0]).height()/2) );
		$(this).css('top', value);
		thing = this;
		console.log($(this)[0]);
		console.log($(thing).height()/2);
		console.log(value);
	});*/
	
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET","http://unofficial.dailyillini.com/api/v1/tweet/?format=json", true);
	xmlhttp.send();
	var json = xmlhttp.responseText;
	console.log(json);
});

function resize_tweet() {
	$('.image-head').css('height', screen_height/3);
	$('.text-body').css('height', screen_height/3);
	$('.map-foot').css('height', screen_height/3);
};



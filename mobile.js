var screen_height = $(window).height();
var dumb_flag = true;
var dumb_flag2 = false;
var tempScrollTop;

function stuff(){
	if (dumb_flag2) {
		$(window).scrollTop(tempScrollTop);
		console.log('REVERT TO SCROLL POSITION');
		dumb_flag2 = !dumb_flag2;
	}
	else {
		dumb_flag2 = !dumb_flag2
	}
};

$(document).ready(function(){
	resize_tweet();
	$(window).resize(resize_tweet);

	$('.row').click(function(){
		if (dumb_flag) {
			tempScrollTop = $(window).scrollTop();
			console.log('SAVED SCROLL POSITION');
			dumb_flag = !dumb_flag;
		}
		else {
			dumb_flag = !dumb_flag;
		}

		$($(this).children()[1]).slideToggle(300);
		$($(this).children()[2]).slideToggle(300);
		$('.caption').fadeToggle(300);
		/*$(this).siblings().slideToggle({
			'duration' : 300,
			'progress' : stuff
		});*/
		$(this).siblings().slideToggle(300, function(){
			if (dumb_flag2) {
				$(window).scrollTop(tempScrollTop);
				console.log('REVERT TO SCROLL POSITION');
				dumb_flag2 = !dumb_flag2;
			}
			else {
				dumb_flag2 = !dumb_flag2
			}
		});
	});
});

function resize_tweet() {
	$('.image-head').css('height', screen_height/3);
	$('.text-body').css('height', screen_height/3);
	$('.map-foot').css('height', screen_height/3);
};


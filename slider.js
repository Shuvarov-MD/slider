$(document).ready(function () {
	var slideNow = 1,
		slideCount = $('.slide-wrap').children().length,
		slideTime = 7000;

	setInterval(nextSlide, slideTime);

	$('.btn-next').click(nextSlide);
	$('.btn-prev').click(prevSlide);


	$('.bullet').on('click', function() {
		var bullet = $(this).index();

		$('.active').removeClass('active');
		$(this).addClass('active');

		if(bullet + 1 != slideNow) {
			var slideTransform = -$('.viewport').width() * bullet;
			$('.slide-wrap').css({
				'transform': 'translate('+slideTransform+'px,0)'
			});
			slideNow = bullet + 1;
		}
	});


	$(this).keyup(function(event) {
		var key = event.which;

		if(key == 37) {
			prevSlide();
		} else if(key == 39) {
			nextSlide();
		}
	});


	function nextSlide() {
		$('.active').removeClass('active');

		if(slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
			$('.slide-wrap').css({
				'transform': 'translate(0,0)'
			});
			slideNow = 1;
			$('.bullet').eq(0).addClass('active');
		} else {
			var slideTransform = -$('.viewport').width() * slideNow;
			$('.slide-wrap').css({
				'transform': 'translate('+slideTransform+'px,0)'
			});
			slideNow++;
			$('.bullet').eq(slideNow - 1).addClass('active');
		}
	}


	function prevSlide() {
		$('.active').removeClass('active');

		if(slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
			var slideTransform = -$('.viewport').width()*(slideCount - 1);
			$('.slide-wrap').css({
				'transform': 'translate('+slideTransform+'px,0)'
			});
			slideNow = slideCount;
			$('.bullet').eq(slideNow - 1).addClass('active');
		} else {
			var slideTransforms = -$('.viewport').width()*(slideNow - 2);
			$('.slide-wrap').css({
				'transform': 'translate('+slideTransforms+'px,0)'
			});
			slideNow--;
			$('.bullet').eq(slideNow - 1).addClass('active');
		}
	}

});
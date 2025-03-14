$(document).ready(function () {
		initFAQ();
});

var initFAQ = function () {
		var swiperFAQThumbs = new Swiper(".faq-thumbs", {
				slidesPerView: 'auto',
				freeMode: true,
				watchSlidesProgress: true,
		});
		var swiperFAQ = new Swiper(".faq-main", {
				allowTouchMove: false,
				effect: 'fade',
				fadeEffect: {
						crossFade: true
				},
				thumbs: {
						swiper: swiperFAQThumbs,
				},
		});

		swiperFAQ.on('slideChange', function () {
				$('.faq-el').removeClass('open');
		});

		var _resize = function () {
				$('.faq-el').each(function () {
						var hold = $(this);

						hold.css({
								'--height': hold.find('.text > *').outerHeight() + 'px'
						})
				});
		};

		_resize();
		$(window).on('resize', _resize);

		$('.faq-el-title').on('click', function () {
				$(this).closest('.faq-el').toggleClass('open');
		});
};

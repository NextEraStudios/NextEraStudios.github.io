$(document).ready(function () {
		initReviews();
});

var initReviews = function () {
		var swiperReviews = new Swiper('.slider-reviews', {
				slidesPerView: 'auto',
				freeMode: {
						enabled: true,
						sticky: true,
				},
				speed: 400,
				navigation: {
						nextEl: '.reviews-next',
						prevEl: '.reviews-prev',
				},
				pagination: {
						el: '.reviews-pagination',
						clickable: true
				},
		});

		$('.review:has(video)').each(function () {
				var link = $(this);
				var vid = link.find('video');

				link.on('click', function () {
						vid[0].pause();
						$('body').append('<div class="modal-video"><div class="modal-video-close"></div></div><div class="modal-video-fader"></div>');
						vid.clone().appendTo($('.modal-video'));
						$('.modal-video').find('video').removeAttr('loop').attr('muted', false).attr('controls', true);
						$('.modal-video').addClass('open');

						var _close = function () {
								vid[0].play();
								$('.modal-video').removeClass('open');
								setTimeout(function () {
										$('.modal-video').remove();
										$('.modal-video-fader').remove();
								}, 200);
						};

						$('.modal-video-fader, .modal-video-close').on('click', function () {
								_close();
						});

						$(document).keyup(function (e) {
								if (e.keyCode === 27) {
										_close();
								}
						});
				});
		});

		$('.review:has(.text)').each(function () {
				var hold = $(this);
				var text = hold.find('.text');
				var ch = text.find('> *');
				var link = hold.find('.text-trigger');

				var _resize = function () {
						/*
						text.css({
								'--height': ch.outerHeight() + 'px'
						});
						*/

						if (!text.hasClass('open')) {
								if (Math.floor(ch.outerHeight()) > Math.ceil(text.outerHeight())) {
										text.addClass('has-more');
								} else {
										text.removeClass('has-more');
								}
						}
				};

				_resize();
				$(window).on('resize', _resize);

				link.on('click', function () {
						text.toggleClass('open');
				});
		});
};

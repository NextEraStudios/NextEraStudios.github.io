$(document).ready(function () {
		initWorks();
});

var initWorks = function () {

		$('.works').each(function () {
				var hold = $(this);

				var _checkActive = function () {
						var i = hold.find('.list > .el.active').index();
						hold.find('.nav').css({
								'--active': i
						});

						if (i >= 9) {
								hold.find('.nav').addClass('tens');
						} else {
								hold.find('.nav').removeClass('tens');
						}
				};

				hold.find('.list > .el').each(function () {
						hold.find('.number').append('<li></li>');

						var el = $(this);

						var _scroll = function () {
								if (el.offset().top < $(window).scrollTop() + $(window).outerHeight() / 2 && el.offset().top + el.outerHeight() > $(window).scrollTop() + $(window).outerHeight() / 2 && !el.hasClass('active')) {
										hold.find('.list > .el').not(this).removeClass('active');
										el.addClass('active');
										_checkActive();
								}
						};

						_scroll();
						$(window).on('scroll', _scroll);


				});

				hold.addClass('ready');
		});

		// Scroll Speed start
		var lastOffset = $(window).scrollTop();
		var lastDate = new Date().getTime();

		$(window).on('scroll', function (e) {
				var delayInMs = e.timeStamp - lastDate;
				var offset = $(window).scrollTop() - lastOffset;
				var speedInpxPerMs = offset / delayInMs;
				var scrollSpeed = Math.abs(speedInpxPerMs.toFixed(2));

				$('.works').css({
						'--speed': (scrollSpeed + 1)
				})

				lastDate = e.timeStamp;
				lastOffset = $(window).scrollTop();
		});

		// Scroll Speed end
};

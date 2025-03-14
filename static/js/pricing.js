$(document).ready(function () {
		initPricing();
});

var initPricing = function () {
		$('.pricing').each(function () {
				var hold = $(this);
				var tw = hold.find('.screen1 .twice .trigger');

				var _resize = function () {
						var x = (tw.offset().left + tw.outerWidth() / 2) * 100 / hold.outerWidth();
						var y = (tw.offset().top + tw.outerHeight() / 2) * 100 / hold.outerHeight();

						hold.css({
								'--top': y + '%',
								'--left': x + '%',
						});
				};

				_resize();
				$(window).on('resize', _resize);
		});
};

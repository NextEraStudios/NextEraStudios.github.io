$(document).ready(function () {
		initServices();
});

var initServices = function () {

		document.querySelectorAll('.services .h1 > .big > *, .services .title > span').forEach(button => button.innerHTML = '<span>' + button.textContent.replace(/ /ig, '\u00A0').trim().split('').join('</span><span>') + '</span>');

		var _scroll = function () {
				$('.services').each(function () {
						var el = $(this);
						var i1, i2;
						var p = ($(window).scrollTop() / (el.outerHeight() - $(window).outerHeight())) * 2;

						if (p <= 0) {
								i1 = 0;
						} else if (p > 0 && p < 1) {
								i1 = p;
						} else {
								i1 = 1
						}
						if (p <= 1) {
								i2 = 0;
						} else if (p > 1 && p < 2) {
								i2 = p - 1;
						} else {
								i2 = 1
						}

						el.css({
								'--percent1': i1,
								'--percent2': i2
						});
				});
		};

		_scroll();
		$(window).on('scroll resize', _scroll);

		$('.services').addClass('ready');
};

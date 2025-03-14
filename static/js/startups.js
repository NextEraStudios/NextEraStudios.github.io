$(document).ready(function () {
		initStartupsSteps();
		initStartupsPriorities();
		initStartupsBenefits();
});

var initStartupsSteps = function () {

		var _scroll = function () {
				$('.startups-steps').each(function () {
						var el = $(this);
						var i1, i2, i3;
						var p = (($(window).scrollTop() - el.offset().top) / (el.outerHeight())) * 4;

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
						if (p <= 2) {
								i3 = 0;
						} else if (p > 2 && p < 3) {
								i3 = p - 2;
						} else {
								i3 = 1
						}

						if (p >= 0.5) {
								el.addClass('active1');
						} else {
								el.removeClass('active1');
						}
						if (p >= 1.5) {
								el.addClass('active2');
						} else {
								el.removeClass('active2');
						}
						if (p >= 2.5) {
								el.addClass('active3');
						} else {
								el.removeClass('active3');
						}

						if (p >= 3) {
								el.addClass('done');
						} else {
								el.removeClass('done');
						}

						el.css({
								'--percent1': i1,
								'--percent2': i2,
								'--percent3': i3
						});
				});
		};

		_scroll();
		$(window).on('scroll resize', _scroll);
};

var initStartupsPriorities = function () {

		var _scroll = function () {
				$('.startups-priorities').each(function () {
						var el = $(this);
						var i1, i2, i3;
						var p = (($(window).scrollTop() - el.offset().top) / (el.outerHeight())) * 5;

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
						if (p <= 2) {
								i3 = 0;
						} else if (p > 2 && p < 3) {
								i3 = p - 2;
						} else {
								i3 = 1
						}

						if (p >= 0.5) {
								el.addClass('active1');
						} else {
								el.removeClass('active1');
						}
						if (p >= 1.5) {
								el.addClass('active2');
						} else {
								el.removeClass('active2');
						}
						if (p >= 2.5) {
								el.addClass('active3');
						} else {
								el.removeClass('active3');
						}

						if (p >= 3) {
								el.addClass('done');
						} else {
								el.removeClass('done');
						}

						el.css({
								'--percent1': i1,
								'--percent2': i2,
								'--percent3': i3
						});
				});
		};

		_scroll();
		$(window).on('scroll resize', _scroll);
};


var initStartupsBenefits = function () {

		var _scroll = function () {
				$('.startups-benefits').each(function () {
						var el = $(this);

						if (el.is(':visible')) {
								var i, i1, i2, i3, i4, i5, i6;
								var p = ((($(window).scrollTop() - el.offset().top) / (el.outerHeight() - $(window).outerHeight())) * 5);

								if (p <= 0) {
										i = 0;
								} else if (p > 0 && p < 4) {
										i = p / 4;
								} else {
										i = 1
								}
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
								if (p <= 2) {
										i3 = 0;
								} else if (p > 2 && p < 3) {
										i3 = p - 2;
								} else {
										i3 = 1
								}
								if (p <= 3) {
										i4 = 0;
								} else if (p > 3 && p < 4) {
										i4 = p - 3;
								} else {
										i4 = 1
								}
								if (p <= 4) {
										i5 = 0;
								} else if (p > 4 && p < 5) {
										i5 = p - 4;
								} else {
										i5 = 1
								}
						}

						el.css({
								'--percent': i,
								'--percent1': i1,
								'--percent2': i2,
								'--percent3': i3,
								'--percent4': i4,
								'--percent5': i5
						});
				});
		};

		_scroll();
		$(window).on('scroll resize', _scroll);

};

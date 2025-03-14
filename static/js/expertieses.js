$(document).ready(function () {
		initExpertieses();
});

var initExpertieses = function () {
		$('.expertieses').find('.list').each(function () {
				var el = $(this);
				var t = el.html();
				el.html(t + t);
				el.addClass('ready');
		});
};

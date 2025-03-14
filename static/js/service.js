$(document).ready(function () {
		initService();
});

var initService = function () {

		var _resize = function () {
				$('.service-offer').find('.el').each(function () {
						var hold = $(this);

						hold.css({
								'--height': hold.find('.text > *').outerHeight() + 'px'
						})
				});
		};

		_resize();
		$(window).on('resize', _resize);

		/*04.11.24 start*/
		$('.service-offer').find('.el-title').on('click', function () {
				var par = $(this).closest('.el');
				par.toggleClass('open');
				par.parent().find('.el').not(par).removeClass('open');
		});
		/*04.11.24 end*/


		$('.service-offer, .service-others').find('.el').each(function () {
				var link = $(this);

				link.on('mouseenter', function (e) {
								var parentOffset = $(this).offset(),
										relX = e.pageX - parentOffset.left,
										relY = e.pageY - parentOffset.top;
								$(this).css({
										'--top': relY.toFixed(2) + 'px',
										'--left': relX.toFixed(2) + 'px'
								})
						})
						.on('mouseout', function (e) {
								var parentOffset = $(this).offset(),
										relX = e.pageX - parentOffset.left,
										relY = e.pageY - parentOffset.top;
								$(this).css({
										'--top': relY.toFixed(2) + 'px',
										'--left': relX.toFixed(2) + 'px'
								})
						});
		});
};

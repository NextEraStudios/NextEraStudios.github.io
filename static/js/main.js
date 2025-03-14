$(document).ready(function () {
		$('body').append('<div class="screen-resizer" style="pointer-events: none; opacity: 0; z-index: -1; position: fixed; height: 100vh; height: 100svh;"></div>');
		initSplitText();
		initVideo();
		initScroll();
		initCells();
		initBtns();
		initHover();
		initMarquee();
		initHero();
		initSubscrCover();
		initCursor();
		initMenu();
		$('html').addClass('ready');
});

var initSubscrCover = function () {
		$('.subscr-cover-link').each(function () {
				var el = $(this);
				var text = el.find('.text');
				var cont = text.html();

				var _text = function () {
						if (text.find('> *:not(.line)').outerWidth() > text.outerWidth()) {
								text.html('<span class="line">' + cont + cont + '</span>');
								text.addClass('ready');
						}
				};

				var _resize = function () {
						text.removeClass('ready');
						text.html(cont);
						el.css({
								'--width': el.find('.btn').outerWidth() + 'px'
						});
						_text();
				};

				_resize();
				$(window).on('resize', _resize);
		});
};

var initHero = function () {
		$('.hero').on('click', function () {
				var el = $(this).next();
				//$(window).scrollTop(el.offset().top);
				$('html, body').animate({
						scrollTop: el.offset().top
				}, {
						queue: false,
						duration: 500
				});
		});
};

var initMarquee = function () {
		$('.marquee').each(function () {
				var el = $(this);
				var text = el.html();
				el.html('');
				el.append('<div class="marquee-line"><div class="marquee-star"></div><div>' + text + '</div><div class="marquee-star"></div><div>' + text + '</div><div class="marquee-star"></div><div>' + text + '</div><div class="marquee-star"></div><div>' + text + '</div><div class="marquee-star"></div><div>' + text + '</div><div class="marquee-star"></div><div>' + text + '</div><div class="marquee-star"></div><div>' + text + '</div><div class="marquee-star"></div><div>' + text + '</div><div class="marquee-star"></div><div>' + text + '</div><div class="marquee-star"></div><div>' + text + '</div></div>');
		});
};

var initCells = function () {
		$('.cells').each(function () {
				var el = $(this);
				var _resize = function () {
						var h = 9;
						var v = 5;
						var max = 120;
						var ch = h;
						var cv = v;

						var ah = Math.floor($(window).outerWidth() / max);

						if (ah >= h) {
								ch = h;
						} else {
								ch = ah;
						}


						$('html').css({
								'--h': ch
						});

						var size = (el.outerWidth() / ch);

						var av = Math.floor(($('.screen-resizer').outerHeight() - $('.header').outerHeight()) / size);

						if (av >= v) {
								cv = v;
						} else {
								cv = av;
						}


						$('html').css({
								'--v': cv
						});
				};

				_resize();
				$(window).on('resize', _resize);
		});

};

var initScroll = function () {

		var _scroll = function () {
				if ($(window).scrollTop() > $('.header').outerHeight() / 4) {
						$('html').addClass('scrolled');
				} else {
						$('html').removeClass('scrolled');
				}
				if ($(window).scrollTop() > $(window).outerHeight()) {
						$('html:not(:has(.services-slider))').addClass('scrolled-screen');
				} else {
						$('html:not(:has(.services-slider))').removeClass('scrolled-screen');
				}

				$('.js_detect-scroll').each(function () {
						var el = $(this);

						if (($(window).scrollTop() + $(window).outerHeight() - 100) > el.offset().top) {
								el.addClass('visible');
						} else {
								//el.removeClass('visible');
						}
				});

				$('.js_scroll-progress').each(function () {
						var el = $(this);
						var i;
						var p = (($(window).scrollTop() + $(window).outerHeight() - el.offset().top) / ($(window).outerHeight() + el.outerHeight()));

						if (p <= 0) {
								i = 0;
						} else if (p > 0 && p < 1) {
								i = p;
						} else {
								i = 1
						}

						el.css({
								'--percent': i
						});
				});
		};

		_scroll();
		$(window).on('scroll', _scroll);
};


var initSplitText = function () {
		$('.js_split').each(function () {
				var el = $(this);

				if (el.find('> div').length > 0 || el.find('> p').length > 0) {
						el.find('> div, > p').each(function () {
								var d = $(this);

								var arr = d.html().trim().split(/(?<!<[^>]*?)\s(?![^<]*?>)/g);

								for (var i = 0; i < arr.length; i++) {
										if (arr[i]) {
												arr[i] = '<span><span>' + arr[i] + '</span></span>';
										}
								}

								d.html(arr.join(' '));
						});
				} else {
						var arr = el.html().trim().split(/(?<!<[^>]*?)\s(?![^<]*?>)/g);

						for (var i = 0; i < arr.length; i++) {
								if (arr[i]) {
										arr[i] = '<span><span>' + arr[i] + '</span></span>';
								}
						}

						el.html(arr.join(' '));
				}

				el.addClass('ready');
		});

		var _resize = function () {
				$('.js_split').find('> span, > div > span, > p > span').each(function () {
						var el = $(this);
						var n = ((el.offset().top - el.closest('.js_split').offset().top) / el.outerHeight()).toFixed(0);
						el.attr('data-row', n);
				});
		};

		_resize();
		$(window).on('resize', _resize);
};

var initVideo = function () {
		var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

		if (isSafari) {
				$('html').addClass('safari');
		}

		$('video').each(function () {
				var hold = $(this);

				if (isSafari && hold.hasClass('trans')) {
						hold.attr('src', (i, old) => old.replace('webm', 'mp4'));
				}

				if (!hold.hasClass('ignore')) {
						var _scroll = function () {
								if ((hold.offset().top) < ($(window).scrollTop() + $(window).outerHeight() / 2) && hold.offset().top > $(window).scrollTop() - hold.outerHeight()) {
										if (hold[0].loop == true) {
												hold[0].play();
										} else {
												if (!hold.hasClass('detected')) {
														hold.addClass('detected');
														hold[0].play();
												}
										}
								} else {
										if (hold[0].loop == true) {
												hold[0].pause();
										}
								}
						};

						_scroll();
						$(window).on('scroll', function () {
								_scroll();
						});
				}
		});
};

var initCursor = function () {
		if (window.matchMedia("(pointer: fine)").matches) {
				var cursor = $(".cursor");

				var posX = 0;
				var posY = 0;

				var mouseX = '-10px';
				var mouseY = '-10px';

				TweenMax.to({}, 0.016, {
						repeat: -1,
						onRepeat: function () {
								posX += (mouseX - posX) / 9;
								posY += (mouseY - posY) / 9;

								TweenMax.set(cursor, {
										css: {
												translateX: mouseX,
												translateY: mouseY
										}
								});
						}
				});

				$(document).on("mousemove", function (e) {
						cursor.addClass('ready');
						mouseX = e.clientX;
						mouseY = e.clientY;
				});

				$(".btn").on("mouseenter", function () {
						cursor.addClass("cursor-min");
				});
				$(".btn").on("mouseleave", function () {
						cursor.removeClass("cursor-min");
				});

				$("a:not([data-hover-text]), *[data-hover], input, textarea").on("mouseenter", function () {
						cursor.addClass("cursor-hover");
				});
				$("a:not([data-hover-text]), *[data-hover], input, textarea").on("mouseleave", function () {
						cursor.removeClass("cursor-hover");
				});

				$("*[data-hover-text]").on("mouseenter", function () {
						var t = $(this).data('hover-text');
						cursor.find('.cursor-text').html(t);
						cursor.addClass("cursor-hover-text");
				});
				$("*[data-hover-text]").on("mouseleave", function () {
						cursor.removeClass("cursor-hover-text");
				});

				$("*[data-hover-arrow-down]").on("mouseenter", function () {
						var t = $(this).data('hover-text');
						cursor.find('.cursor-text').html(t);
						cursor.addClass("cursor-hover-arrow-down");
				});
				$("*[data-hover-arrow-down]").on("mouseleave", function () {
						cursor.removeClass("cursor-hover-arrow-down");
				});


				$('*[data-magnetic]').each(function () {
						var el = $(this);
						var inn = el.find('> *');

						el.mouseleave(function (e) {
								cursor.removeClass("cursor-min");
								TweenMax.to(this, 0.4, {
										scale: 1
								});
								TweenMax.to(inn, 0.4, {
										scale: 1,
										x: 0,
										y: 0
								});
						});

						el.mouseenter(function (e) {
								cursor.addClass("cursor-min");
								TweenMax.to(this, 0.4, {
										transformOrigin: '0 0',
										scale: 1
								});
								TweenMax.to(inn, 0.4, {
										scale: 1.1
								});
						});

						el.mousemove(function (e) {
								callParallax(e);
						});

						function callParallax(e) {
								parallaxIt(e, inn, 50);
						}

						function parallaxIt(e, target, movement) {
								var $this = el;
								var boundingRect = $this[0].getBoundingClientRect();
								var relX = e.pageX - boundingRect.left;
								var relY = e.pageY - boundingRect.top;
								var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

								TweenMax.to(target, 0.3, {
										x: (relX - boundingRect.width / 2) / boundingRect.width * movement,
										y: (relY - boundingRect.height / 2 - scrollTop) / boundingRect.width * movement,
										ease: Power2.easeOut
								});
						}
				});

				$('.hero > .cover').each(function () {
						var el = $(this);
						var inn = el.find('> .arrow');

						TweenMax.to(inn, 0.4, {
								top: '85%',
								left: '50%'
						});

						el.mouseleave(function (e) {
								TweenMax.to(inn, 1.0, {
										top: '85%',
										left: '50%'
								});
								cursor.removeClass("cursor-hide");
						});

						el.mouseenter(function (e) {

								cursor.addClass("cursor-hide");
						});

						el.mousemove(function (e) {
								TweenMax.to(inn, 0.4, {
										scale: 1,
										left: mouseX,
										top: (mouseY + $(window).scrollTop())
								});
						});
				});
		}

};

var initHover = function () {
		document.querySelectorAll('.js_hover').forEach(button => button.innerHTML = '<span>' + button.textContent.replace(/ /ig, '\u00A0').trim().split('').join('</span><span>') + '</span>');
};

var initMenu = function () {
		$('.toggle-menu').on('click', function () {
				$('html').toggleClass('open-menu');
		});
};


var initBtns = function () {
		$('.btn').each(function () {
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

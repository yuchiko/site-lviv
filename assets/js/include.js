(function ($, window, document) {
	// The $ is now locally scoped
	// Listen for the jQuery ready event on the document
	$(function () {
		// on ready
		scrollNav();
		madValidation.init();
	});

	$(window).on('load', function () {
		// on load
		mobileNav.init('.header__menu');
	});

	// code

	var mobileNav = {
		className: '.js_mobile-nav',
		copyClassName: '.js_mobile-nav_copy',
		mobileMenuClassName: '.mobile-nav__menu',
		activeClass: 'open',
		init: function (mainMenuClassName) {
			if (!$(this.mobileMenuClassName).children().length) {
				$(mainMenuClassName).children().clone().prependTo(this.mobileMenuClassName);
			}

			$(document).on('click', '.burger', function () {
				mobileNav.toggle();
			});
		},
		open: function () {
			$(this.className).addClass(this.activeClass);
		},
		close: function () {
			$(this.className).removeClass(this.activeClass);
		},
		toggle: function () {
			$(this.className).hasClass(this.activeClass) ? this.close() : this.open();
		}
	};

	function scrollNav() {
		//jQuery for page scrolling feature - requires jQuery Easing plugin
		$(document).on('click touchstart', 'a.page-scroll', function (event) {

			$('.js_mobile-nav').removeClass('open');

			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});
	}

	var madValidation = {
		option: {
			formClass: '.md-form'
		},
		init: function() {
			var _self = this;
			var forms = document.querySelectorAll(_self.option.formClass);
			
			for (var i = 0; i < forms.length; i++) {
					forms[i].addEventListener('submit', _self.initActions);
			}
		},
		initActions: function(){
			event.preventDefault();
			swal("Спасибо!", "Ваша заявка успешно отправлена - мы свяжемся с вами в ближайшее время!", "success");
		}
	}

}(window.jQuery, window, document));
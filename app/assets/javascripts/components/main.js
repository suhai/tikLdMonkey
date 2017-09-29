(function ($) {
	"use strict";
    
	var elance = { 
		preloader: function() {
			$(window).on('load', function() {
				$("body").imagesLoaded(function() {
					$('.preloader').delay(300).slideUp('slow', function () {
						$(this).remove();
					});
				});
			});
		},

		menuscroll: function () {
			if ($('#sticky-header').length) {
				var stickyMenu = $('#nav-main').clone();
				stickyMenu.appendTo('#sticky-header');
				$(window).scroll(function () {
					var w = $(window).width();
					if (w > 767) {
						if ($(this).scrollTop() > 200) {
							$('#sticky-header').slideDown();
						} else {
							$('#sticky-header').slideUp();
						}
					}
				});
			}
					
			$('a.smoot_scroll').bind('click' ,function(event) {
				var $anchor = $(this);
				$('html,body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top}, 800 , 'easeInOutExpo');
				return false;
			});            
		},
			
			
		portfolio_isotop: function () {
			var $modelisotop = $('.portfolio-item-content');
			$modelisotop.isotope({
				filter: '*',
				animationOptions: {
					duration: 1000,
					easing: 'linear',
					queue: false,
				}
			});
			
			$('.portfolio-categories-nav li a').click(function(){
				var selector = $(this).attr('data-filter');
				$modelisotop.isotope({ 
					filter: selector,
					animationOptions: {
						duration: 1000,
						easing: 'linear',
						queue: false, 
					}
				});
				return false;
			});
		},
		
		
		portfolio_popup: function() {
			$('a.single-portfolio-item-inner').magnificPopup({
				type: 'inline',
				modal: false,
				alignTop: true,
				fixedContentPos: true,
				fixedBgPos: false,
				overflowY: 'auto',
				closeBtnInside: true,
				preloader: false,
				midClick: true,
				removalDelay: 300,
				mainClass: 'mfp-fade'
			});
		},
		
	
		animation_scroll: function() {  
			new WOW().init();
		}, 
		

		scroll_top: function () {
			$("body").append("");
			var $scrolltop = $('#scroll-top');
			$(window).on('scroll', function () {
				if ($(this).scrollTop() > $(this).height()) {
					$scrolltop
						.addClass('btn-show')
						.removeClass('btn-hide');
				} else {
					$scrolltop
						.addClass('btn-hide')
						.removeClass('btn-show');
				}
			});
			$("a[href='#top']").on('click', function () {
				$("html, body").animate({
					scrollTop: 0
				}, "normal");
				return false;
			});
		},

		// initialize the methods
		initializ: function() {   
			elance.preloader();
			elance.menuscroll();    
			elance.portfolio_isotop();     
			elance.portfolio_popup();      
			elance.animation_scroll();     
			elance.scroll_top();   
		}
	};

	// document.ready function
	$(function() {
		elance.initializ();
	});
    
})(jQuery);
(function ($) {
	"use strict";
    
    var elance = { 
        /* ---------------------------------------------
         Preloader
         --------------------------------------------- */
        preloader: function() {
            $(window).on('load', function() {
                $("body").imagesLoaded(function() {
                    $('.preloader').delay(300).slideUp('slow', function () {
                        $(this).remove();
                    });
                });
            });
        },
        
        /* ---------------------------------------------
        Menu scroll
        --------------------------------------------- */
        menuscroll: function () {
            // Sticky Menu
            //-------------------------------
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
        
        /* ---------------------------------------------
         port Masonry
         --------------------------------------------- */
        port_masonry: function () {
            if ($('#port-masonry').length > 0) {
                var container = $('#port-masonry');
                container.imagesLoaded(function () {
                    container.masonry({
                        itemSelector: '.grid'
                    });
                });
            }
        },
        
        /* ---------------------------------------------
        PortFolio Isotop Photo
        --------------------------------------------- */
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
        
        /* ---------------------------------------------
        Portfolio Popup
         --------------------------------------------- */
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
        
        /* ---------------------------------------------
        Customer Reviews
        --------------------------------------------- */
        customer_reviews: function() {
            $('#customer-reviews').owlCarousel({
                center: true,
                items: 1,
                smartSpeed: 800,
                autoplay: true,
                autoplayTimeout: 3000,
                loop: true,
                margin: 0,
                nav: false,
                dots: true,
                animateOut: 'slideOutDown',
                animateIn: 'bounceIn'
            });            
        },
        
        /* ---------------------------------------------
         Maps
        --------------------------------------------- */
        maps: function() {
            if ($('#gmaps').length) {
                var map;
                map = new GMaps({
                    el: '#gmaps',
                    lat: 43.04446,
                    lng: -76.130791,
                    scrollwheel: false,
                    zoom: 10,
                    zoomControl: true,
                    panControl: false,
                    streetViewControl: false,
                    mapTypeControl: false,
                    overviewMapControl: false,
                    clickable: false
                });                
                var image = 'assets/images/map-icon.png';
                map.addMarker({
                    lat: 43.04446,
                    lng: -76.130791,
                    icon: image,
                    animation: google.maps.Animation.DROP,
                    verticalAlign: 'bottom',
                    horizontalAlign: 'center'
                });
                var styles = [
                  { 
                    stylers: [
                      { hue: "#FD7070" },
                      { saturation: -40 },
                    ]
                  },{
                    featureType: "road",
                    elementType: "geometry",
                    stylers: [
                      { hue: "#039DDD" },       
                      { lightness: 90 },
                      { visibility: "simplified" }
                    ]
                  },{
                    featureType: "road",
                    elementType: "labels",
                    stylers: [
                      { visibility: "off" }
                    ]
                  }
                ];
                map.setOptions({styles: styles});    
            }
        },
        /* ---------------------------------------------
         Mail Chip
         --------------------------------------------- */
        mailchip: function () {
            $('#mc-form').ajaxChimp({
                url: 'http://codextree.us10.list-manage.com/subscribe/post?u=b02e4f21e264536eff4820875&amp;id=4d57faf2cb'
                    /* Replace Your AjaxChimp Subscription Link */
            });            
        },
        
        /* ---------------------------------------------
        Animaton Scroll
         --------------------------------------------- */
        animation_scroll: function() {  
            new WOW().init();
        }, 
        
        /* ---------------------------------------------
         Footer Issue
        --------------------------------------------- */
        footerissue: function () {
            var footerHeight = $(".site-footer").height();
            var footerWidth = $(window).width();
            if(footerWidth < 992){
                $('.main-contant').css({
                    marginBottom: 0
                });
            }
            else {
                $('.main-contant').css({
                    marginBottom: footerHeight
                });
            }
        },
        /* ---------------------------------------------
         Scroll top
         --------------------------------------------- */
        // scroll_top: function () {
        //     $("body").append("<a href='#top' id='scroll-top' class='topbutton btn-hide'><span class='glyphicon glyphicon-menu-up'></span></a>");
        //     var $scrolltop = $('#scroll-top');
        //     $(window).on('scroll', function () {
        //         if ($(this).scrollTop() > $(this).height()) {
        //             $scrolltop
        //                 .addClass('btn-show')
        //                 .removeClass('btn-hide');
        //         } else {
        //             $scrolltop
        //                 .addClass('btn-hide')
        //                 .removeClass('btn-show');
        //         }
        //     });
        //     $("a[href='#top']").on('click', function () {
        //         $("html, body").animate({
        //             scrollTop: 0
        //         }, "normal");
        //         return false;
        //     });
        // },
        /* ---------------------------------------------
         function initializ
         --------------------------------------------- */
        initializ: function() {   
            elance.preloader();
            elance.menuscroll();  
            elance.port_masonry();   
            elance.portfolio_isotop();     
            elance.portfolio_popup();     
            elance.customer_reviews();   
            elance.maps();   
            elance.mailchip();   
            elance.animation_scroll();   
            elance.footerissue();   
            elance.scroll_top();   
        }
    };
    
    /* ---------------------------------------------
     Document ready function
     --------------------------------------------- */
    $(function() {
        elance.initializ();
    });
    
})(jQuery);
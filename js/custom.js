(function($) {
    "use strict";

    /**
     * Table of Contents:
     *
     * 01 - Document Ready
     * 02 - Window Load
     * 03 - Window scroll
     * 04 - Platform detect
     * 05 - collapsed menu close on click
     * 06 - collapsed menu close on click
     * 07 - menufullpage
     * 08 - Waypoint Top Nav Sticky
     * 09 - Active Menu Item on Reaching Different Sections
     * 10 - home section on scroll parallax & fade
     * 11 - on click scrool to target with smoothness
     * 12 - Scroll navigation
     * 13 - scrollToTop
     * 14 - Background Parallax
     * 15 - Team Hover Effect
     * 16 - Home Resize Fullscreen
     * 17 - lightbox popup
     * 18 - Countdown
     * 19 - Owl Carousel
     * 20 - Flex Slider
     * 21 - maximage Fullscreen Parallax Background Slider
     * 22 - progress bar / horizontal skill bar
     * 23 - pie chart / circle skill bar
     * 24 - Funfact Number Counter
     * 25 - Masonry Isotope
     * 26 - Megafolio
     * 27 - Contact Form
     * 28 - Wow initialize
     * 29 - Fit Vids
     * 30 - YT Player for Video
     * 31 - Flickr Feed
     * 32 - accordion & toggles
     * 33 - Horizontal & Vertical Tab
     * 34 - Shop Plus Minus
     * 35 - tooltip
     * 36 - Checkout Ship to different address
     * 37 - Top search toggle
     * 38 - Twitter Feed
     * 39 - Mailchimp
     * 40 - Google-map
     * 41 - toggle Google map
     * -----------------------------------------------
     */



    /* ---------------------------------------------------------------------- */
    /* -------------------- 01 - Document Ready ----------------------------- */
    /* ---------------------------------------------------------------------- */
    $(document).ready(function() {
        $(window).trigger("resize");
        escope_lightboxPopup();
        escope_scrollToFixed();
        escope_menufullpage();
        escope_topnav_animate();
        escope_scrolltoTarget();
        escope_navLocalScorll();
        escope_parallaxBgInit();
        escope_teamInit();
        escope_resize_fullscreen();
        escope_countdown();
        escope_owlCarousel();
        escope_flexSlider();
        escope_maximageSlider();
        escope_progress_bar();
        escope_piechart();
        escope_funfact();
    	escope_megafolio();
        escope_contactform();
        escope_wow();
        escope_fitVids();
        escope_YTPlayer();
        escope_jflickrfeed();
        escope_accordion_toggles();
        escope_tab();
        escope_shop_qty_plus_minus();
        escope_tooltip();
        escope_shop_shipto_different_address();
        escope_topsearch_toggle();
        escope_twittie();
        escope_mailChimp();
        escope_toggleMap();
    });



    /* ---------------------------------------------------------------------- */
    /* ----------------------- 02 - Window Load ----------------------------- */
    /* ---------------------------------------------------------------------- */
    $(window).load(function() {
        //preloader
        $("#preloader").fadeOut(500);
        
        $(window).trigger("scroll");
        $(window).trigger("resize");
        
        // Hash Forwarding
        if (window.location.hash){
            var hash_offset = $(window.location.hash).offset().top;
            $("html, body").animate({
                scrollTop: hash_offset
            });
        }
    });

    /* ---------------------------------------------------------------------- */
    /* ------------------------- 03 - Window scroll ------------------------- */
    /* ---------------------------------------------------------------------- */
    $(window).scroll(function() {
        escope_topnav_animate();
        escope_home_parallax_fade_effect();
        escope_scrollToTop_icon();
        escope_activate_menuitem();
    });


  /* ---------------------------------------------------------------------- */
  /* -------------------------- 04 - Platform detect ------------------------- */
  /* ---------------------------------------------------------------------- */
    var isMobile;
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        isMobile = true;
        $("html").addClass("mobile");
    }
    else {
        isMobile = false;
        $("html").addClass("no-mobile");
    }

    
    /* ---------------------------------------------------------------------- */
    /* ---------------------- 05 - collapsed menu close on click ------------------ */
    /* ---------------------------------------------------------------------- */
    $(document).on('click', '.navbar-collapse.in', function (e) {
      if ($(e.target).is('a')) {
          $(this).collapse('hide');
      }
    });

    /* ---------------------------------------------------------------------- */
    /* ---------------------- 06 - collapsed menu close on click ------------------ */
    /* ---------------------------------------------------------------------- */
    function escope_scrollToFixed() {
        $('.navbar-scrolltofixed').scrollToFixed();
    }

    /* ---------------------------------------------------------------------- */
    /* -------------------------- 07 - menufullpage ------------------------- */
    /* ---------------------------------------------------------------------- */
    function escope_menufullpage() {
        var menufullpage = $('.menu-full-page .menu-link');
        $(menufullpage).menufullpage();
    }

    /* ---------------------------------------------------------------------- */
    /* ---------------------- 08 - Waypoint Top Nav Sticky ------------------ */
    /* ---------------------------------------------------------------------- */
    function escope_topnav_animate() {
        if ($(window).scrollTop() > (100)) {
            $(".navbar-animated").addClass("animated-active");
        } else {
            $(".navbar-animated").removeClass("animated-active");
            $(".navbar-fixed-top .navMenuCollapse").collapse({
                toggle: false
            });
            $(".navbar-fixed-top .navMenuCollapse").collapse("hide");
            $(".navbar-fixed-top .navbar-toggle").addClass("collapsed");
        }

        if ($(window).scrollTop() > (50)) {
            $(".inner-sticky-wrapper .navbar").removeClass("pt-10").removeClass("pb-10");
        } else {
            $(".inner-sticky-wrapper .navbar").addClass("pt-10").addClass("pb-10");
        }
    }

    /* ---------------------------------------------------------------------- */
    /* ------ 09 - Active Menu Item on Reaching Different Sections ---------- */
    /* ---------------------------------------------------------------------- */
    //Active Menu Item on Reaching Different Sections
    var sections = $('section'),
        nav = $('header'),
        nav_height = nav.outerHeight();

    function escope_activate_menuitem() {
        var cur_pos = $(window).scrollTop() + 2;
        sections.each(function() {
            var top = $(this).offset().top - nav_height - 80,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('a').removeClass('current').removeClass('active');
                sections.removeClass('current').removeClass('active');

                $(this).addClass('current').addClass('active');
                nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('current').addClass('active');
            }
        });
    }


    /* ---------------------------------------------------------------------- */
    /* ----------- 10 - home section on scroll parallax & fade -------------- */
    /* ---------------------------------------------------------------------- */
    function escope_home_parallax_fade_effect() {
        if ($(window).width() >= 1200) {
            var scrolled = $(window).scrollTop();
            $('.content-fade-effect .home-content .home-text').css('padding-top', (scrolled * 0.0610) + '%');
            $('.content-fade-effect .home-content .home-text').css('opacity', 1 - (scrolled * 0.00120));
        }
    }


    /* ---------------------------------------------------------------------- */
    /* -------------- 11 - on click scrool to target with smoothness -------- */
    /* ---------------------------------------------------------------------- */
    function escope_scrolltoTarget() {
        //jQuery for page scrolling feature - requires jQuery Easing plugin
        $('.smooth-scroll').on('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top-80
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    }

    /* ---------------------------------------------------------------------- */
    /* --------------------- 12 - Scroll navigation ------------------------- */
    /* ---------------------------------------------------------------------- */
    function escope_navLocalScorll() {
        $(".navbar-nav").localScroll({
            target: "body",
            duration: 1500,
            offset: -60,
            easing: "easeInOutExpo"
        });
        $("#menu").localScroll({
            target: "body",
            duration: 1500,
            easing: "easeInOutExpo"
        });
    }


    /* ---------------------------------------------------------------------- */
    /* -------------------------- 13 - scrollToTop  ------------------------- */
    /* ---------------------------------------------------------------------- */
    function escope_scrollToTop_icon() {
        if ($(window).scrollTop() > 600) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    }

    $(document.body).on('click', '.scrollToTop', function(e) {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    /* ---------------------------------------------------------------------- */
    /* ---------------------- 14 - Background image, color ---------------------- */
    /* ---------------------------------------------------------------------- */
    $('[data-bg-img]').each(function() {
        $(this).css('background-image', 'url(' + $(this).data("bg-img") + ')');
    });
    $('[data-bg-color]').each(function() {
        $(this).css("cssText", "background: " + $(this).data("bg-color") + " !important;");
    });
    $('[data-text-color]').each(function() {
        $(this).css("cssText", "color: " + $(this).data("text-color") + " !important;");
    });
    $('[data-font-size]').each(function() {
        $(this).css("cssText", "font-size: " + $(this).data("font-size") + " !important;");
    });

    /* ---------------------------------------------------------------------- */
    /* ---------------------- 14 - Background Parallax ---------------------- */
    /* ---------------------------------------------------------------------- */
    function escope_parallaxBgInit() {
        if (($(window).width() >= 1200) && (isMobile === false)) {
            $('.parallax').each(function() {
                $(this).parallax("50%", 0.1);
            });
        }
    }
    $(window).bind('load', function() {
        escope_parallaxBgInit();
    });


    /* ---------------------------------------------------------------------- */
    /* ----------------------- 15 - Team Hover Effect ----------------------- */
    /* ---------------------------------------------------------------------- */
    function escope_teamInit() {
        $(document.body).on('touchstart click', '.team-member', function(e) {
            if ( $("html").hasClass("mobile") ) {
                $(this).toggleClass("js-active");
            }
        });        
    }



    /* ---------------------------------------------------------------------- */
    /* ------------------------ 16 - Home Resize Fullscreen ----------------- */
    /* ---------------------------------------------------------------------- */
    function escope_resize_fullscreen() {
        var windowHeight = $(window).height();
        $('.fullscreen, .revslider-fullscreen').height(windowHeight);
    }
    $(window).resize(function() {
        escope_resize_fullscreen();
    });

    /* ---------------------------------------------------------------------- */
    /* -------------------------- 17 - lightbox popup ----------------------- */
    /* ---------------------------------------------------------------------- */
    function escope_lightboxPopup() {
        lightbox.option({
          resizeDuration: 200,
          alwaysShowNavOnTouchDevices: true,
          positionFromTop: 50,
          wrapAround: true
        });
    }

    /* ---------------------------------------------------------------------- */
    /* ------------------------- 18 - Countdown ----------------------------- */
    /* ---------------------------------------------------------------------- */
    function escope_countdown() {
        $("#countdown").countdown({
            date: "06 October 2015 12:00:00", // countdown target date settings
            format: "on"
        });
    }

    /* ---------------------------------------------------------------------- */
    /* ---------------------------- 19 - Owl Carousel  ---------------------- */
    /* ---------------------------------------------------------------------- */
    function escope_owlCarousel() {
        $(".text-carousel").owlCarousel({
            autoplay: true,
            autoplayTimeout: 2000,
            loop: true,
            items: 1,
            dots: true,
            nav: true,
            navText: [
                '<i class="pe-7s-angle-left"></i>',
                '<i class="pe-7s-angle-right"></i>'
            ]
        });

        $(".text-carousel-fadeup").owlCarousel({
            autoplay: true,
            autoplayTimeout: 2000,
            smartSpeed: 450,
            loop: true,
            items: 1,
            dots: true,
            nav: false,
            navText: [
                '<i class="pe-7s-angle-left"></i>',
                '<i class="pe-7s-angle-right"></i>'
            ],
            animateOut: 'slideOutDown',
            animateIn: 'flipInX'
        });

        $(".image-carousel").owlCarousel({
            autoplay: true,
            autoplayTimeout: 2000,
            smartSpeed: 400,
            items: 1,
            loop: true,
            dots: true,
            nav: true,
            navText: [
                '<i class="pe-7s-angle-left"></i>',
                '<i class="pe-7s-angle-right"></i>'
            ]
        });

        $(".testimonial-carousel").owlCarousel({
            autoplay: false,
            autoplayTimeout: 2000,
            items: 1,
            loop: true,
            dots: true,
            nav: false
        });

        $(".features-carousel").owlCarousel({
            autoplay: true,
            autoplayTimeout: 2000,
            items: 3,
            loop: true,
            dots: true,
            nav: false,
            responsive: {
                0: {
                    items: 1,
                    center: false
                },
                470: {
                    items: 2,
                    center: false
                },
                960: {
                    items: 3
                }
            }
        });

        $(".product-carousel").owlCarousel({
            autoplay: true,
            autoplayTimeout: 2000,
            items: 4,
            loop: true,
            dots: true,
            nav: false,
            responsive: {
                0: {
                    items: 1,
                    center: false
                },
                470: {
                    items: 2,
                    center: false
                },
                960: {
                    items: 3
                },
                1170: {
                    items: 4
                }
            }
        });

        $(".clients-logo.carousel").owlCarousel({
            autoplay: true,
            autoplayTimeout: 2000,
            items: 6,
            dots: false,
            nav: false,
            responsive: {
                0: {
                    items: 3,
                    center: false
                },
                600: {
                    items: 4,
                    center: false
                },
                960: {
                    items: 5
                },
                1170: {
                    items: 6
                },
                1300: {
                    items: 6
                }
            }
        });

        $(".fullwidth-carousel").owlCarousel({
            autoplay: true,
            autoplayTimeout: 2000,
            items: 1,
            loop: true,
            dots: false,
            nav: true,
            navText: [
                '<i class="pe-7s-angle-left"></i>',
                '<i class="pe-7s-angle-right"></i>'
            ]
        });

        $('.featured-gallery.style1').owlCarousel({
            autoplay: true,
            autoplayTimeout: 2000,
            center: true,
            loop: true,
            margin: 3,
            stagePadding: 50,
            dots: false,
            nav: true,
            navText: [
                '<i class="pe-7s-angle-left"></i>',
                '<i class="pe-7s-angle-right"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    center: false
                },
                600: {
                    items: 2,
                    center: false
                },
                960: {
                    items: 3
                },
                1170: {
                    items: 4
                },
                1300: {
                    items: 4
                }
            }
        });

        $('.featured-gallery.style2').owlCarousel({
            autoplay: true,
            autoplayTimeout: 2000,
            loop: true,
            margin: 3,
            dots: false,
            nav: true,
            navText: [
                '<i class="pe-7s-angle-left"></i>',
                '<i class="pe-7s-angle-right"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    center: false
                },
                600: {
                    items: 2,
                    center: false
                },
                960: {
                    items: 3
                },
                1170: {
                    items: 4
                },
                1300: {
                    items: 4
                }
            }
        });

        $('.featured-gallery.style3').owlCarousel({
            autoplay: true,
            autoplayTimeout: 2000,
            center: true,
            loop: true,
            margin: 3,
            stagePadding: 50,
            dots: false,
            nav: true,
            navText: [
                '<i class="pe-7s-angle-left"></i>',
                '<i class="pe-7s-angle-right"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    center: false
                },
                600: {
                    items: 2,
                    center: false
                },
                960: {
                    items: 2
                },
                1170: {
                    items: 3
                },
                1300: {
                    items: 3
                }
            }
        });
    }
    
    /* ---------------------------------------------------------------------- */
    /* ---------------------------- 20 - Flex Slider  ----------------------- */
    /* ---------------------------------------------------------------------- */
    function escope_flexSlider() {
        $('.product-image').flexslider({
            animation: "slides",
            controlNav: "thumbnails"
        });

        $('.flex-carousel').flexslider({
            animation: "slides",
            controlNav: "thumbnails"
        });

        $('#magazine-slider-thumbs').flexslider({
            animation: "slide",
            controlNav: false,
            animationLoop: false,
            slideshow: false,
            itemWidth: 150,
            itemMargin: 0,
            asNavFor: '#magazine-slider'
        });

        $('#magazine-slider').flexslider({
            animation: "slide",
            controlNav: false,
            animationLoop: false,
            slideshow: false,
            sync: "#magazine-slider-thumbs"
        });
    
        // The slider being synced must be initialized first
        $('#flex-sync-thumb').flexslider({
            animation: "slide",
            controlNav: false,
            animationLoop: false,
            slideshow: false,
            itemWidth: 120,
            itemMargin: 4,
            asNavFor: '#flex-sync-slider',
            prevText: '',
            nextText: ''
        });

        $('#flex-sync-slider').flexslider({
            animation: "slide",
            controlNav: false,
            animationLoop: false,
            slideshow: false,
            sync: "#flex-sync-thumb",
            prevText: '',
            nextText: ''
        });
    }
	
    /* ---------------------------------------------------------------------- */
    /* ------ 21 - maximage Fullscreen Parallax Background Slider  ---------- */
    /* ---------------------------------------------------------------------- */
    function escope_maximageSlider() {
        $('#maximage').maximage({
            cycleOptions: {
                fx: 'fade',
                speed: 1500,
                prev: '.img-prev',
                next: '.img-next'
            }
        });
        // Functions for parallax effect on home main top bg 
        function maximage_homeParallax() {
            if (!$('#home').hasClass('static')) {
                var scrolled = $(window).scrollTop();
                $('#maximage .mc-image').css({
                    'top': 'auto',
                    'bottom': -(scrolled * 0.7) + 'px'
                });
            }
        }
        $(window).on('scroll', function() {
            if ($(window).width() >= 1200) {
                maximage_homeParallax();
            }
        });
    }

    /* ---------------------------------------------------------------------- */
    /* ---------------- 22 - progress bar / horizontal skill bar ------------ */
    /* ---------------------------------------------------------------------- */
    function escope_progress_bar() {
        $('.progress-bar').appear();
        $(document.body).on('appear', '.progress-bar', function() {
            $('.progress-bar').each(function() {
                if (!$(this).hasClass('appeared')) {
                    var percent = $(this).data('percent');
                    var barcolor = $(this).data('barcolor');
                    $(this).append('<span class="percent">' + percent + '%' + '</span>');
                    $(this).css('background-color', barcolor);
                    $(this).css('width', percent + '%');
                    $(this).addClass('appeared');
                }
            });
        });
        $('.progress-bar-aa').each(function() {
            if (!$(this).hasClass('appeared')) {
                var percent = $(this).data('percent');
                var barcolor = $(this).data('barcolor');
                $(this).append('<span class="percent">' + percent + '%' + '</span>');
                $(this).css('background-color', barcolor);
                $(this).css('width', percent + '%');
                $(this).addClass('appeared');
            }
        });

    }

    /* ---------------------------------------------------------------------- */
    /* -------------------- 23 - pie chart / circle skill bar --------------- */
    /* ---------------------------------------------------------------------- */
    function escope_piechart() {
        $('.piechart').appear();
        $(document.body).on('appear', '.piechart', function() {
            $('.piechart').each(function() {
                if (!$(this).hasClass('appeared')) {
                    var barcolor = $(this).data('barcolor');
                    var trackcolor = $(this).data('trackcolor');
                    var linewidth = $(this).data('linewidth');
                    $(this).easyPieChart({
                        animate: 3000,
                        barColor: barcolor,
                        trackColor: trackcolor,
                        easing: 'easeOutBounce',
                        lineWidth: linewidth,
                        size: 160,
                        lineCap: 'square',
                        scaleColor: false,
                        onStep: function(from, to, percent) {
                            $(this.el).find('span').text(Math.round(percent));
                        }
                    });
                    $(this).addClass('appeared');
                }
            });
        });
    }

    /* ---------------------------------------------------------------------- */
    /* --------------------- 24 - Funfact Number Counter -------------------- */
    /* ---------------------------------------------------------------------- */
    function escope_funfact() {
        $('.animate-number').appear();
        $(document.body).on('appear', '.animate-number', function() {
            $('.animate-number').each(function() {
                if (!$(this).hasClass('appeared')) {
                    $(this).animateNumbers($(this).attr("data-value"), true, parseInt($(this).attr("data-animation-duration"), 10));
                    $(this).addClass('appeared');
                }
            });
        });
    }


    /* ---------------------------------------------------------------------- */
    /* ---------------------- 25 - Masonry Isotope -------------------------- */
    /* ---------------------------------------------------------------------- */
    function reorganizeIsotope() {
        jQuery('.masonry-items').each(function() {
            var $container = jQuery(this);
            var maxitemwidth = $container.data('maxitemwidth');
            if (!maxitemwidth) {
                maxitemwidth = 370;
            }
            var containerwidth = Math.ceil((($container.width() + (parseInt($container.css('marginLeft'), 10) * 2)) / 120) * 100 - (parseInt($container.css('marginLeft'), 10) * 2));
            //alert(containerwidth);
            var itemmargin = parseInt($container.children('div').css('marginRight'), 10) + parseInt($container.children('div').css('marginLeft'), 10);
            var rows = Math.ceil(containerwidth / maxitemwidth);
            var marginperrow = (rows - 1) * itemmargin;
            var newitemmargin = marginperrow / rows;
            var itemwidth = Math.floor((containerwidth / rows) - newitemmargin + 1);
            //$container.css({ 'width': '110%' });
            $container.children('div').css({
                'width': itemwidth + 'px'
            });
            if ($container.children('div').hasClass('isotope-item')) {
                $container.isotope('reLayout');
            }
        });
    }

    if (jQuery().isotope) {
        /* isotop call */
        jQuery('.masonry-items').each(function() {
            var $container = jQuery(this);
            $container.imagesLoaded(function() {
                $container.isotope({
                    itemSelector: '.masonry-item',
                    transformsEnabled: true // Important for videos
                });
            });
        });

        /* isotop filter */
        $(document.body).on('click', '.masonry-filters li a', function(e) {
            var parentul = jQuery(this).parents('ul.masonry-filters').data('related-grid');
            jQuery(this).parents('ul.masonry-filters').find('li a').removeClass('active');
            jQuery(this).addClass('active');
            var selector = jQuery(this).attr('data-option-value');
            jQuery('#' + parentul).isotope({
                filter: selector
            }, function() {});

            return (false);
        });

        reorganizeIsotope();
        jQuery(window).resize(function() {
            reorganizeIsotope();
        });
        $('.masonry-filters li a.active').trigger("click");
    }

    /* ---------------------------------------------------------------------- */
    /* --------------------------- 26 - Megafolio --------------------------- */
    /* ---------------------------------------------------------------------- */
    function escope_megafolio() {
        var megafolio_container = '.megafolio-container';
        var api = $(megafolio_container).megafoliopro({
            filterChangeAnimation: "rotatescale", // fade, rotate, scale, rotatescale, pagetop, pagebottom,pagemiddle
            filterChangeSpeed: 250, // Speed of Transition
            filterChangeRotate: 99, // If you ue scalerotate or rotate you can set the rotation (99 = random !!)
            filterChangeScale: 0.6, // Scale Animation Endparameter
            delay: 10, // The Time between the Animation of single mega-entry points
            paddingHorizontal: $(megafolio_container).data("padding"), // Padding between the mega-entrypoints
            paddingVertical: $(megafolio_container).data("padding"),
            layoutarray: $(megafolio_container).data("layoutarray") //[5,6] // Defines the Layout Types which can be used in the Gallery. 2-9 or "random". You can define more than one, like {5,2,6,4} where the first items will be orderd in layout 5, the next comming items in layout 2, the next comming items in layout 6 etc... You can use also simple {9} then all item ordered in Layout 9 type.

        });

        // CALL FILTER FUNCTION IF ANY FILTER HAS BEEN CLICKED
        $('.filter').click(function() {
            $('.filter').removeClass("active");
            api.megafilter(jQuery(this).data('category'));
            $(this).addClass("active");
        });
    }

    /* ---------------------------------------------------------------------- */
    /* -------------------------- 27 - Contact Form ------------------------- */
    /* ---------------------------------------------------------------------- */
    function escope_contactform() {
        var $contactform = $('#contact-form'),
            $response = '';

        // After contact form submit
        $contactform.submit(function() {
            // Hide any previous response text
            $contactform.children(".alert").remove();

            // Are all the fields filled in? 
            if (!$('#contact_name').val()) {
                $response = '<div class="alert alert-danger">Please enter your name.</div>';
                $('#contact_name').focus();
                $contactform.append($response);

            } else if (!$('#contact_message').val()) {
                $response = '<div class="alert alert-danger">Please enter your message.</div>';
                $('#contact_message').focus();
                $contactform.append($response);

            } else if (!$('#contact_email').val()) {
                $response = '<div class="alert alert-danger">Please enter valid e-mail.</div>';
                $('#contact_email').focus();
                $contactform.append($response);

            } else {
                // Yes, submit the form to the PHP script via Ajax 
                $contactform.children('button[type="submit"]').button('loading');
                $.ajax({
                    type: "POST",
                    url: "php/contact-form.php",
                    data: $(this).serialize(),
                    success: function(msg) {
                        if (msg == 'sent') {
                            $response = '<div class="alert alert-danger">I\'m so sorry.. but there seems to be a problem. ' +
                                'Please email me at real2reelmm@gmail.com. I look forward to hearing from you!</div>';
                            $contactform[0].reset();
                        } else {
                            $response = '<div class="alert alert-danger">' + msg + '</div>';
                        }
                        // Show response message
                        $contactform.append($response);
                        $contactform.children('button[type="submit"]').button('reset');
                    }
                });
            }
            return false;
        });
    }

    /* ---------------------------------------------------------------------- */
    /* ------------------------- 28 - Wow initialize  ----------------------- */
    /* ---------------------------------------------------------------------- */
    function escope_wow() {
        var wow = new WOW({
            mobile: false // trigger animations on mobile devices (default is true)
        });
        wow.init();
    }

    /* ---------------------------------------------------------------------- */
    /* -------------------------- 29 - Fit Vids ----------------------------- */
    /* ---------------------------------------------------------------------- */
    function escope_fitVids() {
        $('body').fitVids();
    }

    /* ---------------------------------------------------------------------- */
    /* ------------------------- 30 - YT Player for Video ------------------- */
    /* ---------------------------------------------------------------------- */
    function escope_YTPlayer() {
        $(".player").mb_YTPlayer();
    }

    /* ---------------------------------------------------------------------- */
    /* ------------------------- 31 - Flickr Feed --------------------------- */
    /* ---------------------------------------------------------------------- */
    function escope_jflickrfeed() {
        $(".flickr-widget .flickr-feed").jflickrfeed({
            limit: 9,
            qstrings: {
                id: "64742456@N00"
            },
            itemTemplate: '<a href="{{link}}" title="{{title}}" target="_blank"><img src="{{image_m}}" alt="{{title}}">  </a>'
        });
    }

    /* ---------------------------------------------------------------------- */
    /* --------------------- 32 - accordion & toggles ----------------------- */
    /* ---------------------------------------------------------------------- */
    function escope_accordion_toggles() {
        $(".panel-group .collapse").on("show.bs.collapse", function(e) {
            $(this).closest(".panel-group").find("[href='#" + $(this).attr("id") + "']").addClass("active");
        });
        $(".panel-group .collapse").on("hide.bs.collapse", function(e) {
            $(this).closest(".panel-group").find("[href='#" + $(this).attr("id") + "']").removeClass("active");
        });
    }

    /* ---------------------------------------------------------------------- */
    /* ------------------ 33 - Horizontal & Vertical Tab   ------------------ */
    /* ---------------------------------------------------------------------- */
    function escope_tab() {
        var tpl_tab_height;
        $(document.body).on('click', '.tpl-minimal-tabs > li > a', function(e) {
            if (!($(this).parent("li").hasClass("active"))) {
                tpl_tab_height = $(".tpl-minimal-tabs-cont > .tab-pane").filter($(this).attr("href")).height();
                $(".tpl-minimal-tabs-cont").animate({
                    height: tpl_tab_height
                }, function() {
                    $(".tpl-minimal-tabs-cont").css("height", "auto");
                });
            }
        });
    }


    /* ---------------------------------------------------------------------- */
    /* ------------------------ 34 - Shop Plus Minus  ----------------------- */
    /* ---------------------------------------------------------------------- */
    function escope_shop_qty_plus_minus() {
        $(document.body).on('click', '.quantity .plus', function(e) {
            var currentVal = parseInt($(this).parent().children(".qty").val(), 10);
            if (!isNaN(currentVal)) {
                $(this).parent().children(".qty").val(currentVal + 1);
            }
            return false;
        });

        $(document.body).on('click', '.quantity .minus', function(e) {
            var currentVal = parseInt($(this).parent().children(".qty").val(), 10);
            if (!isNaN(currentVal) && currentVal > 0) {
                $(this).parent().children(".qty").val(currentVal - 1);
            }
            return false;
        });
    }

    /* ---------------------------------------------------------------------- */
    /* ---------------------------- 35 - tooltip  --------------------------- */
    /* ---------------------------------------------------------------------- */
    function escope_tooltip() {
        $('[data-toggle="tooltip"]').tooltip();
    }

    /* ---------------------------------------------------------------------- */
    /* -------------- 36 - Checkout Ship to different address  -------------- */
    /* ---------------------------------------------------------------------- */
    function escope_shop_shipto_different_address() {
        $(document.body).on('click', '#checkbox-ship-to-different-address', function(e) {
            $("#checkout-shipping-address").toggle(this.checked);
        });
    }

    /* ---------------------------------------------------------------------- */
    /* ---------------------- 37 - Top search toggle  ----------------------- */
    /* ---------------------------------------------------------------------- */
    function escope_topsearch_toggle() {
        $(document.body).on('click', '#top-search-toggle', function(e) {
            e.preventDefault();
        });
        $('#top-search-bar').on('click', '.search-close', function(e) {
            $('#top-search-toggle').trigger('click');
        });
    }

    /* ---------------------------------------------------------------------- */
    /* ------------------------ 38 - Twitter Feed  -------------------------- */
    /* ---------------------------------------------------------------------- */
    function escope_twittie() {
        $('.twitter-feed').twittie({
            username: 'Envato',
            dateFormat: '%b. %d, %Y',
            template: '{{tweet}} <div class="date">{{date}}</div>',
            count: 3,
            loadingText: 'Loading!'
        }, function() {
            $(".twitter-carousel ul").owlCarousel({
                autoplay: true,
                autoplayTimeout: 2000,
                loop: true,
                items: 1,
                dots: true,
                nav: false
            });
        });
    }

    /* ---------------------------------------------------------------------- */
    /* --------------------------- 39 - Mailchimp --------------------------- */
    /* ---------------------------------------------------------------------- */
    function escope_mailChimp() {
        $('#mailchimp-subscription-form').ajaxChimp({
            callback: mailChimpCallBack,
            url: '//thememascot.us9.list-manage.com/subscribe/post?u=a01f440178e35febc8cf4e51f&amp;id=49d6d30e1e'
        });

        function mailChimpCallBack(resp) {
            // Hide any previous response text
            var $mailchimpform = $('#mailchimp-subscription-form'),
                $response = '';
            $mailchimpform.children(".alert").remove();
            console.log(resp);
            if (resp.result === 'success') {
                $response = '<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>' + resp.msg + '</div>';
            } else if (resp.result === 'error') {
                $response = '<div class="alert alert-danger"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>' + resp.msg + '</div>';
            }
            $mailchimpform.prepend($response);
        }
    }

    /* ---------------------------------------------------------------------- */
    /* ------------------------- 40 - equalHeights ------------------- */
    /* ---------------------------------------------------------------------- */ 
    function landapp_resizeDivs() {
      $('.equal-height > div').css('min-height', 'auto');
      $('.equal-height').equalHeights();
    }
    $(window).resize(function() {
      landapp_resizeDivs();
    });

    /* ---------------------------------------------------------------------- */
    /* -------------------------- 40 - Google-map --------------------------- */
    /* ---------------------------------------------------------------------- */
    function escope_showMap(targetmap) {
        $(targetmap).prettyMaps({
            address: $(targetmap).data("address"),
            image: 'images/map-icon-blue.png',
            hue: '#333',
            saturation: -100,
            zoom: 14,
            draggable: false,
            panControl: false,
            zoomControl: false,
            mapTypeControl: false,
            scaleControl: false,
            streetViewControl: false,
            overviewMapControl: false,
            scrollwheel: false,
            styles: [{
                "featureType": "water",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#d3d3d3"
                }]
            }, {
                "featureType": "transit",
                "stylers": [{
                    "color": "#808080"
                }, {
                    "visibility": "off"
                }]
            }, {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [{
                    "visibility": "on"
                }, {
                    "color": "#b3b3b3"
                }]
            }, {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#ffffff"
                }]
            }, {
                "featureType": "road.local",
                "elementType": "geometry.fill",
                "stylers": [{
                    "visibility": "on"
                }, {
                    "color": "#ffffff"
                }, {
                    "weight": 1.8
                }]
            }, {
                "featureType": "road.local",
                "elementType": "geometry.stroke",
                "stylers": [{
                    "color": "#d7d7d7"
                }]
            }, {
                "featureType": "poi",
                "elementType": "geometry.fill",
                "stylers": [{
                    "visibility": "on"
                }, {
                    "color": "#ebebeb"
                }]
            }, {
                "featureType": "administrative",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#a7a7a7"
                }]
            }, {
                "featureType": "road.arterial",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#ffffff"
                }]
            }, {
                "featureType": "road.arterial",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#ffffff"
                }]
            }, {
                "featureType": "landscape",
                "elementType": "geometry.fill",
                "stylers": [{
                    "visibility": "on"
                }, {
                    "color": "#efefef"
                }]
            }, {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#696969"
                }]
            }, {
                "featureType": "administrative",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "visibility": "on"
                }, {
                    "color": "#737373"
                }]
            }, {
                "featureType": "poi",
                "elementType": "labels.icon",
                "stylers": [{
                    "visibility": "off"
                }]
            }, {
                "featureType": "poi",
                "elementType": "labels",
                "stylers": [{
                    "visibility": "off"
                }]
            }, {
                "featureType": "road.arterial",
                "elementType": "geometry.stroke",
                "stylers": [{
                    "color": "#d6d6d6"
                }]
            }, {
                "featureType": "road",
                "elementType": "labels.icon",
                "stylers": [{
                    "visibility": "off"
                }]
            }, {}, {
                "featureType": "poi",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#dadada"
                }]
            }]
        });
    }
	//auto loaded maps:
	escope_showMap('.autoload-map');


    /* ---------------------------------------------------------------------- */
    /* ----------------------- 41 - toggle Google map ----------------------- */
    /* ---------------------------------------------------------------------- */
    function escope_toggleMap() {
        $(document).on('click', '.toggle-map', function(e) {
            $(this).toggleClass('open');
            var targetmap = $(this).data("targetmap");
            console.log(targetmap);
            $(targetmap).slideToggle(300, function() {
                escope_showMap(targetmap);
                if ($(targetmap).is(":visible")) {
                    setTimeout(function() {
                        $("html, body").animate({
                            scrollTop: $(".toggle-map").offset().top - 70
                        }, "slow", "easeInBack");
                    }, 300);
                }
            });
            return false;
        });

        $(document).on('click', '.btn-show-map', function(e) {
            $(this).addClass('fadeOut').animate({
                opacity: 0
            }, 500, function() {
                escope_showMap($(this).data("targetmap"));
            });
            return false;
        });
    }

})(jQuery);
/*global $, console*/

$(document).ready(function () {

    "use strict";
     
    $('.ws-slider').slick({
        autoplay: true,
        arrows: true,
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
    
        ]
    });



    $("#scroll-logos").simplyScroll();
    $(".banner-flip-inner").simplyScroll();
    
	$(".card-details, .banner-ad-flipback-container").enscroll({
		showOnHover: false,
		verticalTrackClass: 'track3',
		verticalHandleClass: 'handle3'
	});
    
	$(".card-details-no-flip-inner").enscroll({
		showOnHover: false,
		verticalTrackClass: 'track3',
		verticalHandleClass: 'handle3'
	});

    $('.offer-card').mouseenter(function () {
        $(this).next('.front-button-box').css("display", "none");
        $(this).next('.front-button-box').next('.back-button-box').css("display", "block");
    });

    $('.offer-card').mouseleave(function () {
        $(this).next('.front-button-box').css("display", "block");
        $(this).next('.front-button-box').next('.back-button-box').css("display", "none");
    });

    $('.button-box .offer-box2').mouseenter(function (e) {
        $(this).html("<a id='demo01' href='#animatedModal' style='position:relative; color:red; z-index:10'><small>View Offers</small></a>");
    });

    $('.button-box .offer-box2').mouseleave(function (e) {
        $(this).html("<small>" + $(this).data("offers") + " Offers</small>");
    });


	$('.offer-box2').click(function (e) {
        $(this).parents('.offer-card').toggleClass('rotate');
    });
	
    $('.offer-img, .offer-box2').mouseenter(function () {
     //   $(this).parents('.offer-card').addClass('rotate');
    });

    $('.offer-card').mouseleave(function () {
    //  $(this).removeClass('rotate');
    });
    
    // ----- TILE -----
    $(".offer-box2").click(function () {
        $(".added-case:not(#" + $(this).data("added-case") + ")").hide();

        $("#" + $(this).data("added-case")).toggle(500);
    });
    // ----- TILE -----
    
    
    // Pop Up 1
    $('.offers-1').on('click', function () {
        $('.pop-up').fadeIn();
        $('.pop-up').css({
            bottom: 0
        });
        $('html').css({
            overflowY: "hidden"
        });
    });
    $('.pop-up .colse-pop-up i').on('click', function () {
        $('.pop-up').fadeOut();
        $('.pop-up').css({
            bottom: "-120%"
        });
        $('html').css({
            overflowY: "auto"
        });
    });
    
    //pop up 2
    $('.offers-2').on('click', function () {
        $('.pop-up-2').fadeIn();
        $('.pop-up-2').css({
            bottom: 0
        });
        $('html').css({
            overflowY: "hidden"
        });
    });
    $('.pop-up-2 .colse-pop-up i').on('click', function () {
        $('.pop-up-2').fadeOut();
        $('.pop-up-2').css({
            bottom: "-120%"
        });
        $('html').css({
            overflowY: "auto"
        });
    });
});



     

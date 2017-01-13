/*global $*/

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
        $(this).next('.front-button-box').css("display","none");
        $(this).next('.front-button-box').next('.back-button-box').css("display","block");
    });

    $('.offer-card').mouseleave(function () {
        $(this).next('.front-button-box').css("display","block");
        $(this).next('.front-button-box').next('.back-button-box').css("display","none");
    });

    $('.button-box .offer-box2').mouseenter(function(e) {
        $(this).html("<small>View Offers</small>");
    });

    $('.button-box .offer-box2').mouseleave(function(e) {
        $(this).html("<small>" + $(this).data("offers") + " Offers</small>");
    });


	$('.offer-box2').click(function(e) {
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

});



     

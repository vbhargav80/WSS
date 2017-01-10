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
    
	$(".card-details").enscroll({
		showOnHover: false,
		verticalTrackClass: 'track3',
		verticalHandleClass: 'handle3'
	});
    
	$(".card-details-no-flip-inner").enscroll({
		showOnHover: false,
		verticalTrackClass: 'track3',
		verticalHandleClass: 'handle3'
	});			

    /**
      Modified by Varun
    */
    
	$('.offer-box2').click(function(e) {
        $(this).parents('.offer-card').toggleClass('rotate');
    });
	
    $('.offer-img, .offer-box2').mouseenter(function () {
     //   $(this).parents('.offer-card').addClass('rotate');
    });

    $('.offer-card').mouseleave(function () {
    //  $(this).removeClass('rotate');
    });
    
    
    /* Start Varun Japan Edits */
    if ($(window).width() <= 767) {
        $('.offer-card').click(function () {
            $(this).toggleClass('rotate');
        });
        $('.offer-img').click(function () {
            $(this).parents('.offer-card').toggleClass('rotate');
        });
    }
    $(".offer-card-outer > .offer-card").hover(function () {
        if (($(this).find(".card-details")).is(":only-of-type")) {
            $(this).find(".card-details").css("min-height", "200px");
        } else {
          //  $(this).css("height", "550px");
        }
    }, function () {
        $(this).css("height", "320");
    });
    /* End Varun Japan Edits */

    
    // ----- TILE -----
    $(".card-back .offer-box2").click(function () {
        $(".added-case:not(#" + $(this).data("added-case") + ")").hide();

        $("#" + $(this).data("added-case")).toggle(500);
    });
    // ----- TILE -----

});



     

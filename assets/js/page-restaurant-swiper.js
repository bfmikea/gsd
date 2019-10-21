;(function () {
	
	'use strict';



	// var owlCarousel = function(){

 //        var owl = $('.owl-carousel');
 //        owl.owlCarousel({
 //            items: 3,
 //            loop: true,
 //            pagination: true,
 //            margin: 0,
 //            nav: true,
 //            dots: true,
 //            smartSpeed: 800,
 //            navText: [
 //                "<i class='fa fa-angle-left fa-2x owl-direction'></i>",
 //                "<i class='fa fa-angle-right fa-2x owl-direction'></i>"
 //            ],
 //            responsive:{
 //                0:{
 //                    items:1
 //                },
 //                600:{
 //                    items:3
 //                },
 //                1000:{
 //                    items:3
 //                }
 //            }
 //        });


 //        var owl = $('.owl-carousel-fullwidth');
 //        owl.owlCarousel({
 //            items: 1,
 //            loop: true,
 //            margin: 20,
 //            nav: true,
 //            dots: true,
 //            smartSpeed: 800,
 //            autoHeight: true,
 //            navText: [
 //                "<i class='ti-arrow-left owl-direction'></i>",
 //                "<i class='ti-arrow-right owl-direction'></i>"
 //            ]
 //        });

 //    };

    // Document on load.
    $(function(){
        
        // owlCarousel();
        
    });


// Opciones de Slider Swiper
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 3,
      slidesPerColumn:3,
      spaceBetween: 30,

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },    
      // Responsive breakpoints
      breakpoints: {
        // when window width is <= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        // when window width is <= 480px
        480: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        // when window width is <= 640px
        640: {
          slidesPerView: 3,
          spaceBetween: 30
        }
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      
    });    

    


}());
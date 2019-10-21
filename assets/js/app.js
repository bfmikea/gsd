$(document).ready(function() {
    $("#myCarousel").swiperight(function() {
        $(this).carousel('prev');
    });
    $("#myCarousel").swipeleft(function() {
        $(this).carousel('next');
    });
});
$('#myCarousel').carousel({
    interval: 8000,
    pause:false
});



// Para mostrar el fondo cuando está la primera imagen del carousel 
$('#myCarousel').ready(function() {
    var img1 = $('.carousel-item.active').find('img');
    $('.imgc-fondo').css('background-image', 'url(' + $(img1).attr('src') + ')');
    console.log(img1);
});

// Para mostrar el fondo cuando se recive el evento 'slid.bs.carousel'  
$('#myCarousel').on('slid.bs.carousel', function() {
    var img = $('.carousel-item.active').find('img');
    // $('.imgc-fondo').css('background-image','url("assets/img/carousel/rest1.png")');
    
   $('.imgc-fondo').css({'background-image': 'url(' + $(img).attr('src') + ')'})
   				    .animate({opacity: 1}, {queue: false, duration: 8000})
   				    .animate({opacity: .8}, 6000)
   				    .animate({opacity: .6}, 2000);
   
});


$('#myCarousel').on('slide.bs.carousel', function() {
 	$('.imgc-fondo').animate({opacity: 1}, {queue: false, duration: 0})
   				   .animate({opacity: 1}, 0);

 });  
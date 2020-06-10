$(document).ready(function() {
    $('.burger').click(function(event) {
        $('.burger,.head__menu').toggleClass('active');        
    });
    $('.slider').slick({
        arrows:true,
        dots:false,
        fade:false,
        slidesToShow:1,
        slidesToScroll:1,
        speed:1000,
        infinite:true,
        autoplay:true,
    });
});

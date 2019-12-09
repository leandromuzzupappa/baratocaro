const overlay = $('.overlay');
const preLoader = $('.preloader');
const html = $('html');
const phoneImg = $('.phone');

function pageLoaded () {
    setTimeout(() => {
        overlay.fadeOut('slow');
        preLoader.fadeOut('slow');
        html.css('overflow', 'auto');
    }, 500);
}



$(document).ready(function () {
    // Inicializo el slider
    $('.testimonials_slider').slick({
        arrows: true,
        prevArrow: $('.arrow_prev'),
        nextArrow: $('.arrow_next'),
        autoplay: true,
    }) 

    // Cierro el preloader cuando carga la pagina
    pageLoaded();

})
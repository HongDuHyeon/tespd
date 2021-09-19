$(function(){

    const mainSlide = new Swiper('.main_slide', {
        loop: true,
        autoplay: {
            delay: 5000,
        },
        pagination: {
            el: '.main_slide .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.main_slide .swiper-button-next',
            prevEl: '.main_slide .swiper-button-prev',
        }
    });




})
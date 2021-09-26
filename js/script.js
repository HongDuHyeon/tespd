$(function(){
    
    function popup(){
        popupSlide = new Swiper('.popup_slide.swiper-container', {
            loop:true,
            observer: true,
            observeParents: true,
            navigation: {
                nextEl: '.popup_btn .swiper-button-next',
                prevEl: '.popup_btn .swiper-button-prev',
            },
        });
        
    }
$('.cont_wrap .thumb').click(function(){
    $('.popup_slide .swiper-wrapper').css('transform','translate3d(0,0,0)');
    popup();
    
})
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
    

    
    $('.btn_wrap.top button').click(function(){
        var btnIdx = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $('.top_content .cont_wrap').removeClass('active').fadeOut(0);
        $('.top_content .cont_wrap').eq(btnIdx).addClass('active').fadeIn(800);
    });
    $('.btn_wrap.bottom button').click(function(){
        var btnIdx = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $('.bottom_content .cont_wrap').removeClass('active').fadeOut(0);
        $('.bottom_content .cont_wrap').eq(btnIdx).addClass('active').fadeIn(800);
    });
    var contIdx = $('.top_content .cont_wrap').index();
    var secIdx = $('.top_content .cont_wrap div').index();
// console.log(contIdx)
// console.log(secIdx)


   //modal 띄우기
   $('.section dd .thumb').click(function(){

         $('.overlay').css('display','block');
        $('.popup').css('display','block');
        $('html, body').css('overflow','hidden')
        return false;
    });
    //버튼 누를때마다 리스트 삭제 , 모달 닫기
    // popup_slide > swiper-wrapper > swiper-slide 
    $('.popup_close').click(function(){
        $('.popup_slide .swiper-wrapper li').removeAttr('style');
        $('.popup_slide .swiper-wrapper li').removeClass('swiper-slide-active'); 
        $('.popup_slide .swiper-wrapper li').removeClass('swiper-slide'); 
        $('.popup_slide .swiper-wrapper li').removeClass('swiper-slide-prev'); 
        $('.popup_slide .swiper-wrapper li').removeClass('swiper-slide-next'); 
        $('.popup_slide .swiper-wrapper li').remove(); 
        $('.overlay').css('display','none');
        $('.popup').css('display','none');
        $('html, body').css('overflow','visible')
    });

 
})
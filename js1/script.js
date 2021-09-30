$(function(){
    
    function popup(){
        popupSlide = new Swiper('.popup_slide.swiper-container', {
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
            delay: 7000,
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
    
    const companySlide = new Swiper('.company_slide', {
        loop: true,
        autoplay: {
            delay:3000
        },
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
          },
    })
    
    $('.btn_wrap.top button').click(function(){
        var btnIdx = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $('.top_content .cont_wrap').removeClass('active').fadeOut();
        $('.top_content .cont_wrap').eq(btnIdx).fadeIn(1000).addClass('active');
    });
    $('.btn_wrap.bottom button').click(function(){
        var btnIdx = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $('.bottom_content .cont_wrap').removeClass('active').fadeOut();
        $('.bottom_content .cont_wrap').eq(btnIdx).fadeIn(800).addClass('active');
    });
    var contIdx = $('.top_content .cont_wrap').index();
    var secIdx = $('.top_content .cont_wrap div').index();


   //modal 띄우기
   $('.section dd .thumb').click(function(){
         $('.overlay').css('display','block');
        $('.popup').css('display','block');
        $('html, body').css('overflow','hidden')
        return false;
    });
    //버튼 누를때마다 리스트 삭제 , 모달 닫기
    $('.popup_close').click(function(){
        popupSlide.destroy(); 
        $('.popup_slide .swiper-wrapper li').remove(); 
        $('.overlay').css('display','none');
        $('.popup').css('display','none');
        $('html, body').css('overflow','visible')
    });

    // hamberger btn 
    $('#header .ham').click(function(){
        $(this).toggleClass('view');
        $('#header .gnb').toggleClass('view');
        $('#header .logo').hide();
        $('.overlay').toggleClass('view');
        $('html, body').css('overflow','hidden')
        if($(this).hasClass('view')==false) {
            $('html, body').css('overflow','visible');
            $('#header .logo').show();
        }
        return false;
    })
    $(window).scroll(function(){
        var contentTop = $('.contents').size() ? $('.contents').offset().top : 0;
        var windowTop = $(this).scrollTop()+200;
        if(windowTop >= contentTop) {
            $('#header').addClass('fixed')
        }else {
            $('#header').removeClass('fixed')
        }
    });
  
    
    
})
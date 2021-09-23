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

    $('.top_content .cont_wrap .thumb').click(function(){
        const contIdx = $(this).parents('.cont_wrap').index();
        console.log(contIdx)
        secIdx = $(this).parents('.section').index()+1; // 클릭한 section의 위치
        thumbIdx = $(this).index(); // 클릭한 thumb 위치
        var clickInx= $(this).parent(secIdx).index(); 
        var folderArr = ['sound','light','stage']
        // console.log(clickInx);
        var arr = ['1','2','3'];
        var img = $('img');
        var n = 0; //임의로 지정한 수

            while (n < 10) {
                n++;
        
                //이미지 객체생성
                const image = new Image();
                image.src = '/img/'+folderArr[contIdx-1]+secIdx+'-'+arr[thumbIdx]+'-'+n+'.jpg';
        
                //image 태그 생성
                $('.popup .popup_wrap .swiper-wrapper').append($('<li class="swiper-slide"><img src="/img/'+folderArr[contIdx-1]+secIdx+'-'+arr[thumbIdx]+'-'+n+'.jpg" onerror="this.remove ? this.parentElement.remove() : this.removeNode()">'+'</li>'));
        
            }
        return false;
    })

    //버튼 누를때마다 리스트 삭제 , 모달 닫기
    // popup_slide > swiper-wrapper > swiper-slide 
    $('.popup_close').click(function(){
        // $('.popup_slide').remove('li.swiper-slide'); 
        $('.overlay').css('display','none');
        $('.popup').css('display','none');
        $('html, body').css('overflow','visible')
    });

    //modal 띄우기
    $('.section dd .thumb').click(function(){
        $('.overlay').css('display','block');
        $('.popup').css('display','block');
        $('html, body').css('overflow','hidden')
        return false;
    });

})
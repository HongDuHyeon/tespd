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


    // $('.wrap > div').click(function(){
    //     var clickInx= $(this).index()+1; // 각 영역 위치
    //     var arr = ['1','2','3'];
    //     var img = $('img');
    //     var n = 0;
    
    //     while (n < 10) {
    //         n++;
    
    //         //이미지 객체생성
    //         const image = new Image();
    //         image.src = './img/slide'+arr[clickInx-1]+'-'+n+'.jpg';
    
    //         //image 태그 생성
    //         $(this).find('ul').append(
    //                 '<li class="swiper-slide"><img src="./img/slide'+clickInx+'-'+n+'.jpg" onerror="this.remove ? this.parentElement.remove() : this.removeNode()">'+'</li>'
    //                 );
    
    //     }
    
    // })
    


})
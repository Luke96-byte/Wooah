$(function(){
    //비쥬얼 스와이퍼


    
    $('#header .menu-item').hover(function(){
        if ($(this).find('.sub-wrap').length) {
            $('#header').addClass('hover');
            $(this).find('.sub-wrap').addClass('on')
        }
    },function(){
        $('#header').removeClass('hover');
        $('.sub-wrap').removeClass('on')
        $('#header .gnb .menu-item .sub-item:first-child').addClass('on').siblings().removeClass('on')
    })
    
    $('#header .gnb .menu-item .sub-item:first-child').addClass('on')
    $('#header .gnb .menu-item .sub-item').hover(function(){
      $(this).addClass('on').siblings().removeClass('on')
    })

    $('#header .btn-menu').click(function(){
        $('body').addClass('scroll-hidden')
        $('#header .side-nav').addClass('on')
    })
    $('#header .side-nav .btn-close').click(function(){
        $('body').removeClass('scroll-hidden')
        $('#header .side-nav').removeClass('on')
    })

    

    mainSlide = new Swiper('.visual-content',{
        loop:true,
        slidesPerView:'1',
        navigation:{
            prevEl:'.prev',
            nextEl:'.next'
        },
        pagination:{
            el: '.visual-content .pagination',
            clickable:true,
          }
       })

    //스토리 스와이퍼
    storySlide = new Swiper('.story-content',{
        autoplay:{
            delay: 0, 
        } ,
        slidesPerView : 'auto',
        loop:true,
        speed: 5000,   
        freeMode:true,
        loopAdditionalSlides: 1,
    })

    // mainSlide.autoplay.stop()
    // mainSlide.autoplay.start()

    //폰트 스와이퍼
    fontSlide = new Swiper('.font-content',{
        autoplay:{
            delay: 0,
        } ,
        allowTouchMove: false,
        spaceBetween: 16,
        slidesPerView : 'auto',
        loop:true,
        speed:2000,
        loopAdditionalSlides: 1,
       })


     //비디오 play눌렀을때 stop 나오기
     $('.sc-service .btn-control').click(function(){
         if ($(this).hasClass('on')) {
             $('.sc-service video').get(0).currentTime=0;
             $('.sc-service video').get(0).play()
        }else{
            $('.sc-service video').get(0).pause()
        }
        $(this).toggleClass('on')
     })
     

    //푸터 사이트 버튼
    $('#footer .btn-link').click(function() {
      $('#footer .sc-link').toggleClass('show');
    });

   
    $(document).click(function(e){
        // #footer .sc-link에 내가클릭한태그가 길이가갯수가(포함이 되어있는지) 0
        if (!$('#footer .sc-link').has(e.target).length) {
            $('#footer .sc-link').removeClass('show');
        }

    })

    $('#header .side-nav .menu-item .header-wrap .arrow').click(function() {
        var $currentItem = $(this).closest('.menu-item'); // 현재 클릭한 버튼이 속한 li 요소를 선택
        var Open = $(this).hasClass('on'); // 버튼이 열려 있는지 확인
    
        $('#header .side-nav .menu-item .header-wrap .arrow').removeClass('on');
        $('#header .side-nav .menu-item .sub-a-wrap').removeClass('show');
    
        if (!Open) {
            $(this).addClass('on');
            $currentItem.find('.sub-a-wrap').addClass('show');
        }
    });
    
   




})
       
       
                
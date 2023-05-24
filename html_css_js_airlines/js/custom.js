/*=============scroll-top=============*/
/*Scroll to top when arrow up clicked BEGIN*/
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('#back2Top').fadeIn();
    } else {
        $('#back2Top').fadeOut();
    }
});
$(document).ready(function() {
    $("#back2Top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

});
 /*Scroll to top when arrow up clicked END*/

 /*=============banner-slide=============*/

$(document).ready(function(){
    $("#bennarSlide").owlCarousel({
        loop:true,
        margin: 0,
        items: 1,
        autoplay: true,
        autoplayTimeout:3000,
        navs:false
    });
    $('.next-slide').click(function() {
        $("#bennarSlide").trigger('next.owl.carousel');
    });
    $('.prev-slide').click(function() {
        $("#bennarSlide").trigger('prev.owl.carousel');
    });

});

 /*=============Serviceslide=============*/

 $(document).ready(function(){
        $("#servicelide").owlCarousel({
            loop:true,
            margin: 15,
            autoplay: true,
            autoplayTimeout: 3000,
            dots:false,
            nav:false,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    loop:true
                },
                400:{
                    items:2,
                    loop:true
                },
               768:{
                    items:3,
                    loop:true
                },
                992:{
                    items:4,
                    loop:true
                }
            }
        });
    });
 
 /*=============partnerslide=============*/

 $(document).ready(function(){
        $("#partnerslide").owlCarousel({
            loop:true,
            margin: 15,
            autoplay: true,
            autoplayTimeout: 3000,
            dots:false,
            nav:false,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    loop:true
                },
                400:{
                    items:2,
                    loop:true
                },
               768:{
                    items:3,
                    loop:true
                },
                992:{
                    items:4,
                    loop:true
                }
            }
        });
    });

   /*=============COUNTERS================*/ 
       
        const counters = document.querySelectorAll('.value');
        const speed = 2000000;

        counters.forEach( counter => {
           const animate = () => {
              const value = +counter.getAttribute('akhi');
              const data = +counter.innerText;
             
              const time = value / speed;
             if(data < value) {
                  counter.innerText = Math.ceil(data + time);
                  setTimeout(animate, 1);
                }else{
                  counter.innerText = value;
                }
             
           }
           
           animate();
        });

/*========================================*/

/*==============Header Fixed================*/

$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 50) {
        $('#header').addClass('header-fixed');
    } else {
        $('#header').removeClass('header-fixed');
    }
});


 /*=========Chatbox set interval===========*/

setInterval(function(){ $("#chatbox").css('display' , 'block'); }, 12000);

$(document).ready(function(){
    $(".close").click(function(){
        $("#chatbox").css({'display':'none'});
    });
});
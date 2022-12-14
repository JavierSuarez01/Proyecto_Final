$(document).ready(function () {
    $(window).scroll(function () {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

     // slide-up script
     $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });

    // TYPING ANIMATION SCRIPT

    var typed = new Typed(".typing",{
        strings: ["Diseñador Web","Tester de Software","Freelance"],
        typeSpeed: 100,
        backSpeed:60,
        loop: true,
    });

    var typed = new Typed(".typing-2",{
        strings: ["Diseñador Web","Tester de Software","Freelance"],
        typeSpeed: 100,
        backSpeed:60,
        loop: true,
    });



    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    let movil = "fas fa-bars", cerra = "fa-solid fa-xmark";
    $('.menu-btn').html(`<i class="${movil}"></i>`);
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn').html(`<i class="${($(".navbar .menu").hasClass("active")) ? cerra : movil}"></i>`);
    });
    //owl carousel script

    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout:2000,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    })
});


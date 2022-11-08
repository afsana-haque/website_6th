$(function () {
    $('.banner_slider').owlCarousel({
        loop: true,
        responsiveClass: true,
        autoplay: true,
        autoplayTimeout: 2000,
        smartSpeed: 500,
        autoplayHoverPause: true,
        // autoWidth:true,
        nav: true,
        navText: ['<a  class="arrow_lf"><i class="fa-solid fa-long-arrow-left"></i></a>', '<a  class="arrow_rt"><i class="fa-solid fa-long-arrow-right"></i></a>'],
        responsive: {
            0: {
                items: 1,
            }
        }
    })

    $('.client_slider').owlCarousel({
        loop: true,
        responsiveClass: true,
        autoplay: true,
        autoplayTimeout: 2000,
        smartSpeed: 500,
        autoplayHoverPause: true,
        nav: true,
        navText: ['<a  class="arrow_lf"><i class="fa-solid fa-long-arrow-left"></i></a>', '<a  class="arrow_rt"><i class="fa-solid fa-long-arrow-right"></i></a>'],
        responsive: {
            0: {
                items: 1,
            },
            576:{
                items: 2
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 5,
            }
        }
    })
});
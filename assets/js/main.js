$(function () {
    // Header
    // $('header').sticky({
    //     topSpacing: 0,
    //     zIndex: 1020,
    // });

    // Banner
    $('#banner .banner-slide').slick({
        autoplay: true,
        autoplaySpeed: 8000,
        speed: 3000,
        cssEase: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        prevArrow: '<a href="#" class="slick-arrow-prev"><img src="./assets/images/icon-arrow-prev.png" class="img-fluid" /></a>',
        nextArrow: '<a href="#" class="slick-arrow-next"><img src="./assets/images/icon-arrow-next.png" class="img-fluid" /></a>',
    });

    // Brand
    $('#brand .brand-slide').slick({
        autoplay: true,
        slidesToShow: 6,
        slidesToScroll: 4,
        dots: true,
        arrows: false,
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
            }
        }]
    });

    // Specials
    $('#specials .specials-slide').slick({
        autoplay: true,
        slidesToShow: 3,
        dots: true,
        arrows: false,
    });
});
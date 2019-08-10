$(function () {
    // Header
    $('.header-bottom').sticky({
        topSpacing: 0,
        zIndex: 1020,
    });

    // Toggle menu
    $('.header-menu').hide();
    $('#btnToggleMenu').click(function (e) {
        e.preventDefault();
        $('.header-menu').slideToggle();
    });

    // Banner
    $('#banner .banner-slide').slick({
        autoplay: true,
        autoplaySpeed: 8000,
        speed: 3000,
        cssEase: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        prevArrow: '<a href="#" class="slick-arrow-prev"></a>',
        nextArrow: '<a href="#" class="slick-arrow-next"></a>',
    });

    // Brand
    $('#brand .brand-slide').slick({
        autoplay: true,
        slidesToShow: 6,
        slidesToScroll: 4,
        dots: true,
        appendArrows: brandSlideNav,
        appendDots: brandSlideDots,
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
        appendArrows: specialsSlideNav,
        appendDots: specialsSlideDots,
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
            }
        }]
    });
});
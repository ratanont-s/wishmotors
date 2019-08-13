$(function () {
    // Header
    $('.header-bottom').sticky({
        topSpacing: 0,
        zIndex: 1020,
    });
    if (window.innerWidth < 992) {
        $(".header-bottom").unstick();
        $("#header").addClass("sticky-top");
    }

    // Toggle menu
    $('.header-menu').hide();
    $('#btnToggleMenu').click(function (e) {
        e.preventDefault();
        $('.header-menu').slideToggle();
    });
});
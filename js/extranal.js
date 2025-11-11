$(document).ready((function() {
    $("#project-nav").click(function(){
        // alert("The paragraph was clicked.");
        $(".main-menu-div").addClass("main-menu-div-active");
        $(".projects-menu-list").addClass("projects-menu-list-active"); 
    });
    $("#project-reset-menu").click(function(){
        // alert("The paragraph was clicked.");
        $(".main-menu-div").removeClass("main-menu-div-active");
        $(".projects-menu-list").removeClass("projects-menu-list-active"); 
    });   
    $('.acc-head').click(function(){
        $(this).parent().toggleClass('active').siblings().removeClass('active');
    })
    $(window).scroll((function() {
        $(this).scrollTop() > 50 ? $("header").addClass("header-fix") : $("header").removeClass("header-fix")
    }));
    $(".nav-button").click(function(){
        $("body").toggleClass("body-active-div");
        $(this).toggleClass("active");
        $(".nav-main-menu").toggleClass("active"); 
        $('.js-menu-link').toggleClass('animate__fadeInLeft'); 
    });
    $('#scroll_Top').click(function(){
        $('html, body').animate({scrollTop:0}, 'slow'); 
        return false;
    });   
    /*--------------------------------------------------------------
    1. Preloader
    --------------------------------------------------------------*/
    $(window).on('load', function () {
        preloader();
    });
    function preloader() {
        $('.cs_preloader_in').fadeOut();
        $('.cs_preloader').delay(150).fadeOut('slow');
    }
}))
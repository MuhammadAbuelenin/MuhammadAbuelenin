$(document).ready(function(){

    // Lib owl Carousel

  $(".owl-carousel").owlCarousel({
      loop: true,
      autoplay: true,
      dots: true,
      margin:10,
      responsiveClass:true,
      responsive:{
          0: {
                items:1
          },
          544: {
              items:3
          }
      }
  });

    // Scroll To Top

    $(window).scroll(function() {

        if($(window).scrollTop() > 500) {
            $("#go-up").fadeIn();
        } else {
            $("#go-up").fadeOut();
        }
    });

    $("#go-up").click(function() {
        $("html, body").animate({
            scrollTop: 0
        },500);
    });


    // go to the section by click on navbar

$(".header-area .main-menu .navbar .container-fluid .navbar-nav li a").click(function() {

    $("html").animate({
        scrollTop: $("#" + $(this).data("scroll")).offset().top - 100
    }, 500);

});


// // Type Writer and link Typed.js

// var typed = new Typed("#typer", {
//     strings: [
//         "Muhammad", "Muhammad"
//     ],
//     typeSpeed: 60,
//     backSpeed: 60,
//     loop: true
// });


    var placeAttr = "";

$("[placeholder]").focus(function() {

     placeAttr = $(this).attr("placeholder");
    
    $(this).attr("placeholder", "");
}).blur(function() {
    
    $(this).attr("placeholder", placeAttr);
})





});
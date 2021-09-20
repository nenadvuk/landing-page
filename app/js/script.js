

$(document).ready(function () {
  // Nav bar => only clicked link has styling
  $("a").click(function () {
    if ($(this).hasClass("clicked")) {
      $(this).removeClass("clicked");
    } else {
      $("a").removeClass("clicked");
      $(this).addClass("clicked");
    }
  });

  // Hamburger menu 
  $(".hamburger-menu-wrapper").click(function () {
    $(".hamburger-menu").toggleClass("animate");
    $(".open").toggleClass("overlay");
    if ($(".open").hasClass("overlay")) {
      $(".header__menu").addClass("slideInLeft");
      $(".header__menu").removeClass("slideOutLeft");
    } else {
      $(".header__menu").removeClass("slideInLeft");
      $(".header__menu").addClass("slideOutLeft");
    }
  });
});

// Carousel
$('.carousel').carousel({
  interval: 4000
})
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 2000, // 2 seconds between auto-play transitions
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },

      992: {
        items: 3,
      },
      1400: {
        items: 4,
      },
    },
  });
});

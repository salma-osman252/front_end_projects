$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 40,
  nav: false,
  autoplay: true,
  autoplayTimeout: 2000,
  responsive: {
    0: {
      items: 1,
    },
    750: {
      items: 2,
    },
    940: {
      items: 3,
    },
  },
});

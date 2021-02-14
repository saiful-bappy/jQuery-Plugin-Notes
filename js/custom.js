jQuery(document).ready(function () {
  jQuery(".carousel-slider").owlCarousel({
    items: 3,
    autoPlay: 3000,
    itemsDesktop: [1200, 4],
    itemsDesktopSmall: [1000, 2],
    itemsTablet: [768, 1],
    stopOnHover: true,
  });

  jQuery(".full-slider .prev").click(function () {
    jQuery(".carousel-slider").trigger("owl.prev");

    return false;
  });

  jQuery(".full-slider .next").click(function () {
    jQuery(".carousel-slider").trigger("owl.next");

    return false;
  });

  jQuery(".filter-nav a").click(function () {
    return false;
  });

  jQuery(".filtering-content").mixItUp();
});

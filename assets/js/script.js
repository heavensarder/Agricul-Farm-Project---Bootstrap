
// Isotop Image filter code Starts here

$(document).ready(function () {
  // Initialize Isotope
  var $container = $('#product-container').isotope({
    itemSelector: '.product-img-item',
    layoutMode: 'fitRows'
  });

  // Filter items on button click
  $('.product-catagories a').on('click', function (e) {
    e.preventDefault();
    var filterValue = $(this).attr('data-filter');
    $container.isotope({ filter: filterValue });
  });

  // Add active class to the current button (highlight it)
  $('.product-catagories a').on('click', function () {
    $(this).addClass('active').siblings().removeClass('active');
  });
});

// SWIPER FOR TESTIMONIAL SLIDE CODE STARTS HERE
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 10,

  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }


});


// SWIPER FOR LOGO SLIDE CODE STARTS HERE
var swiper = new Swiper(".mySwiperLogo", {
  slidesPerView: 5,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  // Default parameters
  slidesPerView: 2,
  spaceBetween: 20,

  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  }


});
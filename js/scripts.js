$(document).ready(function() { 

  // Slick Slider
  $(".slider").slick({
    arrows: true,
    autoplay: true,
    autospeed: 2000,
    gutter: 10,
    prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
    dots: false,
    centerMode: true,
    slidesToShow: 4,
    fade: false,

    responsive: [
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 2
            }
        },

        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1
            }
        }

    ]
  });


  // Menu Active
  let body = $('body');
  let menuTrigger = $('.js-menu-trigger');
  let mainOverlay = $('.js-main-overlay');
  let close = $('.main-overlay').after();

  menuTrigger.on('click', function(){
      body.addClass("menu-active");
  });

  mainOverlay.on('click', function(){
      body.removeClass("menu-active");
  });

  $(".menu li a").on('click', function(){
    body.removeClass("menu-active");
  });





  // Menu Active
//   let body = $('body');
  let cartIcon = $('.cart-link');
  let cartOverlay = $('.js-cart-overlay');
//   let close = $('.close-cart').after();

  cartIcon.on('click', function(e){
    e.preventDefault();
      $(".cart-overlay").addClass("display");
      $(".main-cart").addClass("display-cart");
  });

  cartOverlay.on('click', function(){
    $(".cart-overlay").removeClass("display");
    $(".main-cart").removeClass("display-cart");

  });


  $('.close-cart').on('click',function(){
    $(".cart-overlay").removeClass("display");
    $(".main-cart").removeClass("display-cart");
  })
//   ========================= CART ===================================  
});


// ==============>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.


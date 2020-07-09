(function($) {
  "use strict"

  // NAVIGATION
  var responsiveNav = $('#responsive-nav'),
    catToggle = $('#responsive-nav .category-nav'),
    catList = $('#responsive-nav .category-nav .category-list'),
    menuToggle = $('#responsive-nav .menu-nav .menu-header'),
    menuList = $('#responsive-nav .menu-nav .menu-list');

  //responsive-nav
  $(document).click(function(event) {
    
    // if (!$(event.target).closest(responsiveNav).length) {
    //   if (responsiveNav.hasClass('open')) {
    //     responsiveNav.removeClass('open');
    //     $('#navigation').removeClass('shadow');
    //   } else {
    //     if ($(event.target).closest('.nav-toggle > button').length) {
    //       if (!menuList.hasClass('open') && !catList.hasClass('open')) {
    //         menuList.addClass('open');
    //       }
    //       $('#navigation').addClass('shadow');
    //       responsiveNav.addClass('open');
    //     }
    //   }
    // }
  });

  $(function(){
    var currentValue = $('.cart_quantity_input').val();
    var valueElement = $('.cart_quantity_input');
    
    function incrementValue(e){
        valueElement.val(Math.max(parseInt(currentValue)));
        return false;
    }

    $('.add').click(function() {
      currentValue++;
      incrementValue();
    });
    $('.minus').click(function() {
      if (currentValue > 1) {
        currentValue--;
        incrementValue();
      } else {
        alert('quantity should not be less than 1.');
      }
    });

});

  $(document).ready(function(){

  $(".shadow").click(function() {
      $('#navigation').toggleClass('shadow');
      $('#responsive-nav').toggleClass('open');
      $('#responsive-nav .menu-nav .menu-list').toggleClass('open');  
  });
  
  $(".nav-toggle-btn").click(function() {
    $('#navigation').toggleClass('shadow');
    $('#responsive-nav').addClass('open');
    $('#responsive-nav .menu-nav .menu-list').addClass('open');
  });

  $('#responsive-nav .menu-nav li').on('click', function() {
      $('#navigation').removeClass('shadow');
      $('#responsive-nav').removeClass('open');
  });

  $('#responsive-nav .category-nav').on('click', function() {
    $('#responsive-nav .menu-nav .menu-list').removeClass('open');
    $('#responsive-nav .category-nav .category-list').toggleClass('open');
  });

  $('#responsive-nav .menu-nav .menu-header').on('click', function() {
    $('#responsive-nav .category-nav .category-list').removeClass('open');
    $('#responsive-nav .menu-nav .menu-list').toggleClass('open');
  });
  // $('#navigation.shadow').click(function(){
  //     $(this).removeClass('shadow');
  // });

  $(window).scroll(function(){
    var sticky = $('.header-search'),
        scroll = $(window).scrollTop();
    if (scroll >= 100) sticky.addClass('header-fixed');
    else sticky.removeClass('header-fixed');
  });

  // HOME SLICK
  $('#home-slick').slick({
    autoplay: true,
    infinite: true,
    speed: 300,
    arrows: true,
  });

  $('h3 .aside-title').click(function(){
      alert('call');
      $(".list-links").slideToggle();
  });
  // PRODUCTS SLICK
  $('.product-slick-news').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    infinite: true,
    speed: 300,
    dots: false,
    arrows: true,
    appendDots: '.product-slick-dots-1',
    responsive: [{
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          dots: false,
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  });

  $('.product-slick').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    infinite: true,
    speed: 300,
    dots: false,
    arrows: true,
    appendDots: '.product-slick-dots-1',
    responsive: [{
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          dots: false,
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  });

  $('#product-slick-2').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    infinite: true,
    speed: 300,
    dots: true,
    arrows: true,
    appendDots: '.product-slick-dots-2',
    responsive: [{
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          dots: false,
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  });

  // PRODUCT DETAILS SLICK
  $('#product-main-view').slick({
    infinite: true,
    speed: 300,
    dots: false,
    arrows: true,
    fade: true,
    asNavFor: '#product-view',
  });

  $('#product-view').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
    focusOnSelect: true,
    asNavFor: '#product-main-view',
  });



  // $(document).on("click", ".enqury-now", function () {
  //   var myBookId = $(this).attr('id');
  //   $(".modal-body #product_id").val( myBookId );
  //   // As pointed out in comments, 
  //   // it is unnecessary to have to manually call the modal.
  //   // $('#addBookDialog').modal('show');
  // });

  // PRODUCT ZOOM
  // $('#product-main-view .product-view').zoom();

  // PRICE SLIDER
  var slider = document.getElementById('price-slider');
  if (slider) {
    noUiSlider.create(slider, {
      start: [1, 999],
      connect: true,
      tooltips: [true, true],
      format: {
        to: function(value) {
          return value.toFixed(2) + '$';
        },
        from: function(value) {
          return value
        }
      },
      range: {
        'min': 1,
        'max': 999
      }
    });
  }

});

})(jQuery);

//wowjs
WOW.prototype.addBox = function(element) {
  this.boxes.push(element);
};

// Init WOW.js and get instance
var wow = new WOW();
wow.init();

// Attach scrollSpy to .wow elements for detect view exit events,
// then reset elements and add again for animation
$('.wow').on('scrollSpy:exit', function() {
  $(this).css({
    'visibility': 'hidden',
    'animation-name': 'none'
  }).removeClass('animated');
  wow.addBox(this);
}).scrollSpy();

//--------------------------------------------------------------------------------------------------//

//Jssor
  jssor_1_slider_init();

//--------------------------------------------------------------------------------------------------//

$(document).ready(function() {
  //Scrolled navbar
      var scrollTop = 0;

      $(window).scroll(function() {
          scrollTop = $(window).scrollTop();

          if (scrollTop >= 1) {
              $('.navbar').addClass('scrolled-navbar');
              $('.navbar-nav').addClass('scrolled-navbar-color');
              $('.nav-item').addClass('scrolled-navbar-color');
              $('.nav-link').addClass('scrolled-navbar-color');
              $('.btn').addClass('scrolled-navbar-btn');
              $('.navbar-nav').addClass('navbar-nav--scrolled');

          } else if (scrollTop < 1) {
              $('.navbar').removeClass('scrolled-navbar');
              $('.navbar-nav').removeClass('scrolled-navbar-color');
              $('.nav-item').removeClass('scrolled-navbar-color');
              $('.nav-link').removeClass('scrolled-navbar-color');
              $('.btn').removeClass('scrolled-navbar-btn');
              $('.navbar-nav').removeClass('navbar-nav--scrolled');
          } 
      }); 

  //--------------------------------------------------------------------------------------------------//

  //Scroll to position animation
      $('a[href*="#"]').on('click', function(e) {
      e.preventDefault()

      $('html, body').animate(
          {
          scrollTop: $($(this).attr('href')).offset().top,
          },
          1000,
          'linear'
      )
      })

  //--------------------------------------------------------------------------------------------------//

  //on refresh scroll to top    
      /* $(window).on('beforeunload', function(){
          $(window).scrollTop(0);
      }); */

  //--------------------------------------------------------------------------------------------------//

  // Gets the video src from the data-src on each button
      var $videoSrc;  
      $('.video-btn').click(function() {
          $videoSrc = $(this).data( "src" );
      });
      
      // when the modal is opened autoplay it  
      $('#myModal').on('shown.bs.modal', function (e) {
          
      // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
      $("#video").attr('src',$videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0" ); 
      })

      // stop playing the youtube video when I close the modal
      $('#myModal').on('hide.bs.modal', function (e) {
          // a poor man's stop video
          $("#video").attr('src',$videoSrc); 
      })

  //--------------------------------------------------------------------------------------------------//

  //Own Carousel
      $('.owl-carousel').owlCarousel({
      margin:20,
      loop:true,
      responsiveClass:true,
      responsive:{
          0:{
              items:1,
              nav:true
          },
          768:{
              items:2,
              nav:true
          },
          992:{
              items:3,
              nav:true,
              loop:false
          }
      }
  });
  
  //--------------------------------------------------------------------------------------------------//
});

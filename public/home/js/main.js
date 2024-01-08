!(function($) {
  "use strict";

    var $wrapper = $('.main-wrapper');

  // mobmenu  
    var Sidemenu = function() {
      this.$menuItem = $('#mobmenu-menu a');
    };
  
    function init() {
      var $this = Sidemenu;
      $('#mobmenu-menu a').on('click', function(e) {
        if($(this).parent().hasClass('submenu')) {
          e.preventDefault();
        }
        if(!$(this).hasClass('subdrop')) {
          $('ul', $(this).parents('ul:first')).slideUp(350);
          $('a', $(this).parents('ul:first')).removeClass('subdrop');
          $(this).next('ul').slideDown(350);
          $(this).addClass('subdrop');
        } else if($(this).hasClass('subdrop')) {
          $(this).removeClass('subdrop');
          $(this).next('ul').slideUp(350);
        }
      });
      $('#mobmenu-menu ul li.submenu a.active').parents('li:last').children('a:first').addClass('active').trigger('click');
    }
  
  // mobmenu Initiate
  init(); 

    
  // Mobile menu mobmenu overlay
  
  $('body').append('<div class="mobmenu-overlay"></div>');

  $(document).on('click', '#mobile_btn', function() {
    $wrapper.toggleClass('slide-nav');
    $('.mobmenu-overlay').toggleClass('opened');
    $('html').addClass('menu-opened');
    return false;
  });
  
  $(".mobmenu-overlay").on("click", function () {
    $('html').removeClass('menu-opened');
    $(this).removeClass('opened');
    $wrapper.removeClass('slide-nav');
    $('.mobmenu-overlay').removeClass('opened');
    $('.courses-sidebar-wrap').removeClass('open');
  });
// Hero slider
$('.herobanner-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  dots: false,
  arrows: true,
  fade:true,
  speed:2000,
  autoplaySpeed: 3000
});
// Mob Hero slider
$('.mob-herobanner-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  dots: false,
  arrows: true,
  fade:true,
  speed:2000,
  autoplaySpeed: 3000
});
    
})(jQuery);


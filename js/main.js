$(document).ready(function() {

      $('.slider').bxSlider({
          controls : false,
          slideWidth: 1270,
          pagerCustom : '.slider_dots'
      });


        $('html').removeClass('no-js');

        $('.menu-click a').on('click', function () {

          var el = $(this);

          el.parent().toggleClass('menu-active');

          el.parent().siblings('.menu-click.menu-active').removeClass('menu-active');
        });

});

/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
  var $htmlBody = $('html, body'),
    $navbarToggleVisible = $('.navbar-toggle:visible');
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $htmlBody.stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 50
        }, 1000, 'easeOutExpo');
        event.preventDefault();
    });

  // Highlight the top nav as scrolling occurs
  $('body').scrollspy({
      target: '.navbar-fixed-top'
  })

  // Closes the Responsive Menu on Menu Item Click
  $('.navbar-collapse ul li a').click(function() {
      $navbarToggleVisible.click();
  });
  // Offset for Main Navigation
  $('#mainNav').affix({
    offset: {
      top: 50
    }
  });

  $('.subscribe').click(function (e) {
    e.preventDefault();
    document.cookie = "MCEvilPopupClosed=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
    require(["mojo/signup-forms/Loader"],
      function(L) {
        L.start({
          "baseUrl":"mc.us13.list-manage.com",
          "uuid":"47b637469fe9207559b59e168",
          "lid":"4c78b2dc91"
        });
      }
    );
  });

  $.fn.extend({
    animateCss: function (animationName, removeClass) {
      var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
      $(this).addClass('animated ' + animationName).one(animationEnd, function() {
        if (removeClass) {
          $(this).removeClass('animated ' + animationName);
        }
      });
      return $(this);
     }
   });
});

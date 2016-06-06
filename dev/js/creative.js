/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    /// Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });
    $('body').on('activate.bs.scrollspy', function () {
        $('.navbar-text').eq(0).text($('.navbar-fixed-top li.active a').text());
    });
    $('body').trigger('activate.bs.scrollspy'); /// set title on initial load

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });
    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    });
    // Initialize WOW.js Scrolling Animations
    new WOW().init();


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


    ///// custom logic
    var $whatExpand = $('.what-expand'),
      $howSections = $('.how-section'),
      $howNexts = $('.how-next'),
      $contactBtns = $('.contact-form'),
      howId = 0;

    $contactBtns.click(function () {
      alert('Contact Form');
    });
    $whatExpand.click(function () {
      $('.what-toggle').addClass('open');
      $('.what-btn').not(this).animateCss('zoomOut').addClass('inactive');
    });

    $howNexts.click(function () {
      if (howId < $howNexts.length) {
        ++howId;
        $howSections.eq(howId).animateCss('zoomInDown').addClass('open');
        $('html, body').stop().animate({
          scrollTop: $howSections.eq(howId).offset().top
        }, 1250, 'easeInOutExpo');
      }
    });


})(jQuery); // End of use strict

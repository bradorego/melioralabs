(function($) {
  'use strict'; // Start of use strict
  // Vide - Video Background Settings
  // $('body').vide({
  //   mp4: 'mp4/bg.mp4',
  //   poster: 'img/bg-mobile-fallback.jpg',
  // }, {
  //   className: 'bg-video',
  //   posterType: 'jpg'
  // });

  let $partRange = $('#participants'),
    $partOutput = $('#part-output'),
    $designChk = $('#design'),
    $recruitChk = $('#recruit'),
    $sessionChk = $('#session'),
    $analysisChk = $('#analysis'),
    $total = $('#total'),
    $partPlus = $('#part-plus'),
    $mlForm = $('#ml-form'),
    $upsellForm = $('#upsell'),
    ///nothing like an inline switch statement
    bootstrapSize = window.innerWidth >= 1200 ? 'xl' : window.innerWidth >= 922 ? 'lg' : window.innerWidth >= 768 ? 'md' : window.innerWidth >= 576 ? 'sm' : 'xs',
    $masthead = $('.masthead').eq(0),
    $section = $('section'),
    scrollPoints = {},
    $mpTrackClick = $('.mp-track-click'),
    calculateTotal = () => {
      let participants = $partRange.val(),
        total = participants * 25; /// lab
      total += participants * ($designChk.prop('checked') ? 100 : 0);
      total += participants * ($recruitChk.prop('checked') ? 50 : 0);
      total += participants * ($sessionChk.prop('checked') ? 25 : 0);
      total += participants * ($analysisChk.prop('checked') ? 100 : 0);
      return total;
    },
    updateTotal = () => {
      if ($partRange.val() < 30) {
        $partPlus.hide();
        $total.text(`$${calculateTotal()}`)
      } else {
        $partPlus.show();
        $total.text('Let\'s Talk');
      }
    },
    sendEmail = (emailDiv, body, successDiv) => {
      let to = emailDiv.val(),
        processSuccess = function() {
          // Success message
          successDiv.html(
            `<div class='alert alert-success mt-3'>
              <button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>
              Thanks for your interest! We'll follow up with you soon.
            </div>`
          );
          emailDiv.val('');
          mixpanel.track('sendEmail', {
            status: 'success'
          });
        };
      successDiv.on('click', (e) => {
        if (e.target.className.includes("close")) {
          successDiv.html('');
          successDiv.off('click');
        }
      });
      mixpanel.track('sendEmail', {
        status: 'beforeSend'
      });
      if (to) {
        successDiv.html('');
        successDiv.off('click');
        $.ajax({
          url: "https://api.sendgrid.com/api/mail.send.json",
          type: "GET",
          data: {
            api_user: "melioralabs",
            api_key: "TestWord1",
            to: `brad@melioralabs.com`,
            from: to,
            subject: "MelioraLabs Inquiry",
            html: body
          },
          dataType:"jsonp",
          cache: false,
          success: processSuccess,
          error: function(err) {
            console.log(err);
            if (err.status === 200) { /// jklol actually a success
              return processSuccess();
            }
            // Fail message
            successDiv.html(`
              <div class='alert alert-danger mt-3'>
                <button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times</button>
                Whoops! Looks like something went wrong. If the problem persists, please email <a href='mailto:hello@melioralabs.com?subject=Your%20Site%20Is%20Broken'>hello@melioralabs.com</a>.
              </div>`
            );
            mixpanel.track('sendEmail', {
              status: 'fail'
            });
          },
        });
      } else {
        successDiv.html(`
            <div class='alert alert-danger mt-3'>
              <button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times</button>
              Email Address required. We need a way to get in contact with you :)
            </div>`
          );
        mixpanel.track('sendEmail', {
          status: 'no-email'
        });
      }
  };

  $('#ml-submit').click(() => {
    $mlForm.submit();
  });

  $upsellForm.submit((e) => {
    e.preventDefault();
    e.stopPropagation();
    let email = $upsellForm.find("input[type=email]"),
      $success = $upsellForm.find(".success");
    sendEmail(email, `I want to chat more about ML.`, $success);
  });

  $mlForm.submit((e) => {
    e.preventDefault();
    e.stopPropagation();
    let email = $("#email"),
      $success = $mlForm.parent().find('.success');
    sendEmail(email, `
      Email: ${email.val()}<br/>
      Participants: ${$partRange.val()}<br/>
      Lab: true<br/>
      Design: ${$designChk.prop('checked')}<br/>
      Recruit: ${$recruitChk.prop('checked')}<br/>
      Run: ${$sessionChk.prop('checked')}<br/>
      Analyze: ${$analysisChk.prop('checked')}<br/>
      Total: $${calculateTotal()}
    `, $success);
  });
  mixpanel.register({
    page: window.location.pathname,
    device: bootstrapSize
  });
  mixpanel.track('pageview');

  $partRange.on('input', (e) => {
    if ($partRange.val() < 5) { /// no less than 5
      $partRange.val(5);
    }
    $partOutput.text($partRange.val());
    updateTotal();
  });
  $partRange.change(() => {
    mixpanel.track('change', {
      target: 'participant-slider',
      value: $partRange.val()
    });
  });
  $designChk.change(updateTotal);
  $recruitChk.change(updateTotal);
  $sessionChk.change(updateTotal);
  $analysisChk.change(updateTotal);

  $('a').click((e) => {
    e.preventDefault();
    let href = e.target.href;
    while (typeof(href) === "undefined") { /// if the current element doesn't have it, check the parent (all the way up to body if needed)
      e.target = e.target.parentElement;
      href = e.target.href;
    }
    mixpanel.track('click', {
      href: href
    });
    if (e.target.target==="_self") {
      window.location = href;
    } else {
      window.open(href);
    }
  });

  $mpTrackClick.click((e) => {
    let mpValue = e.target.dataset.mpValue;
    while (typeof(mpValue) === "undefined") { /// if the current element doesn't have it, check the parent (all the way up to body if needed)
      e.target = e.target.parentElement;
      mpValue = e.target.dataset.mpValue;
    }
    mixpanel.track('click', {
      target: mpValue
    });
  });


  if ($section.length) {
    scrollPoints = {
      'mainText': {
        hit: false,
        distance: $section.get(0).offsetTop
      },
      'pricing': {
        hit: false,
        distance: $section.get(1).offsetTop
      },
      'customers': {
        hit: false,
        distance: $section.get(2).offsetTop
      },
      'faq': {
        hit: false,
        distance: $section.get(3).offsetTop
      },
      'cta': {
        hit: false,
        distance: $section.get(4).offsetTop
      },
      'bottom': {
        hit: false,
        distance: $masthead[0].scrollHeight - $masthead.height()
      },
    };
  }

  $masthead.scroll(() => {
    $.each(scrollPoints, (key, item) => {
      if ($masthead.scrollTop() > item.distance && !item.hit) {
        mixpanel.track('scroll', {
          item: key
        });
        item.hit = true;
      }
    });
  });
})(jQuery); // End of use strict

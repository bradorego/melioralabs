(function($) {
  'use strict'; // Start of use strict

  // Vide - Video Background Settings
  $('body').vide({
    mp4: 'mp4/bg.mp4',
    poster: 'img/bg-mobile-fallback.jpg',
  }, {
    className: 'bg-video',
    posterType: 'jpg'
  });

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
          console.log("success");
          // Success message
          successDiv.html(
            `<div class='alert alert-success mt-3'>
              <button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>
              Thanks for your interest! We'll follow up with you soon.
            </div>`
          );
          emailDiv.val('');
        };
      successDiv.on('click', (e) => {
        console.log('clicked');
        if (e.target.className.includes("close")) {
          successDiv.html('');
          successDiv.off('click');
        }
      });
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
        },
      });
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

  $partRange.on('input', (e) => {
    if ($partRange.val() < 5) { /// no less than 5
      $partRange.val(5);
    }
    $partOutput.text($partRange.val());
    updateTotal();
  });
  $designChk.change(updateTotal);
  $recruitChk.change(updateTotal);
  $sessionChk.change(updateTotal);
  $analysisChk.change(updateTotal);

})(jQuery); // End of use strict

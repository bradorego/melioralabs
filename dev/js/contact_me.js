$(function() {

    $("#contactForm input,#contactForm textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM
            var name = $("input#name").val();
            var email = $("input#email").val();
            var phone = $("input#phone").val();
            var message = $("textarea#message").val();
            var processSuccess = function() {
              // Success message
              $('#success').html("<div class='alert alert-success'>");
              $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                  .append("</button>");
              $('#success > .alert-success')
                  .append("<strong>Your message has been sent. </strong>");
              $('#success > .alert-success')
                  .append('</div>');

              //clear all fields
              $('#contactForm').trigger("reset");
            };
            $.ajax({
                url: "https://api.sendgrid.com/api/mail.send.json",
                type: "GET",
                data: {
                  api_user: "melioralabs",
                  api_key: "TestWord1",
                  to: "brad@melioralabs.com",
                  from: "bradley.orego@gmail.com",
                  subject: "Contact from MelioraLabs",
                  html: "Name: " + name + "<br/>Phone:" + phone + "<br/>Email:" + email + "<br/>Message:<br/>" + message
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
                  $('#success').html("<div class='alert alert-danger'>");
                  $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                      .append("</button>");
                  $('#success > .alert-danger').append("<strong>Whoops! Looks like something went wrong. Please try again later!");
                  $('#success > .alert-danger').append('</div>');
                  //clear all fields
                  $('#contactForm').trigger("reset");
                },
            })
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
    /*When clicking on Full hide fail/success boxes */
    $('#name').focus(function() {
        $('#success').html('');
    });
});




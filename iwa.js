$(document).ready(function() {
    $(".i").mouseenter(function() {
        $("ul").removeClass("hidden");
    });
    $("ul").on("click", function() {
        $("ul").fadeOut(500, function() {
            $("form, .form-label").fadeIn();
        })
    });
    $(".submitent").on("click", function() {
        $("form, .form-label").fadeOut(500, function() {
            $(".confirmation").fadeIn();
        })
        $("#rotate").addClass("overagain");
    });
    $("#rotate").one("mouseenter", function() {
        $(this).addClass("over");
    });

  });


    $("input.email-form").on("click change keyup blur input", function() {
      function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
		}
        

            $("form input[name='e']").focus();
                if (validateEmail($("form input[name='e']").val())) {
                  $("form button[type=submit]").fadeIn();
                } else {
                  $("form button[type=submit]").fadeOut();
                }
              });

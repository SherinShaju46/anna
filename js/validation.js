// $(document).ready(function(){$("#send_message").click(function(a){a.preventDefault();var b=!1,c=$("#name").val(),d=$("#email").val(),e=$("#phone").val(),f=$("#message").val();if($("#name,#email,#phone,#message").click(function(){$(this).removeClass("error_input")}),0==c.length){var b=!0;$("#name").addClass("error_input")}else $("#name").removeClass("error_input");if(0==d.length||"-1"==d.indexOf("@")){var b=!0;$("#email").addClass("error_input")}else $("#email").removeClass("error_input");if(0==e.length){var b=!0;$("#phone").addClass("error_input")}else $("#phone").removeClass("error_input");if(0==f.length){var b=!0;$("#message").addClass("error_input")}else $("#message").removeClass("error_input");0==b&&($("#send_message").attr({disabled:"true",value:"Sending..."}),$.post("email.php",$("#contact_form").serialize(),function(a){"sent"==a?($("#submit").remove(),$("#mail_success").fadeIn(500)):($("#mail_fail").fadeIn(500),$("#send_message").removeAttr("disabled").attr("value","Send The Message"))}))})})

var form = document.getElementById("contact_form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("my-form-status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        status.innerHTML = "Thanks for your submission!";
        form.reset()
      }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
      });
    }
    form.addEventListener("submit", handleSubmit)
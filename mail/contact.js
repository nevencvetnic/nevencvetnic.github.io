$(function () {

    $("#contactForm input, #contactForm textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function ($form, event, errors) {
        },
        submitSuccess: function ($form, event) {
            event.preventDefault();
            var name = $("input#name").val();
            var email = $("input#email").val();
            var subject = $("#subject :selected").text();
            var message = $("textarea#message").val();

            var body = encodeURIComponent(`Ime: ${name}\n Email: ${email}\n Usluga: ${subject}\n Poruka:${message}\n`);

            $this = $("#sendMessageButton");
            $this.prop("disabled", true);

            console.log("SUBMIT")
            window.open(`mailto:sudskitumacbl@gmail.com?subject=${subject}&body=${body}`);
            console.log("SUBMIT 2")

            $('#success').html("<div class='alert alert-success'>");
                    $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                            .append("</button>");
                    $('#success > .alert-success')
                            .append("<strong>Vaša poruka je uspješno poslana. </strong>");
                    $('#success > .alert-success')
                            .append('</div>');
                    $('#contactForm').trigger("reset");

            // $.ajax({
            //     url: "contact.php",
            //     type: "POST",
            //     data: {
            //         name: name,
            //         email: email,
            //         subject: subject,
            //         message: message
            //     },
            //     cache: false,
            //     success: function () {
            //         $('#success').html("<div class='alert alert-success'>");
            //         $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
            //                 .append("</button>");
            //         $('#success > .alert-success')
            //                 .append("<strong>Vaša poruka je uspješno poslana. </strong>");
            //         $('#success > .alert-success')
            //                 .append('</div>');
            //         $('#contactForm').trigger("reset");
            //     },
            //     error: function (e) {
            //         e.then(console.log)
            //         $('#success').html("<div class='alert alert-danger'>");
            //         $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
            //                 .append("</button>");
            //         $('#success > .alert-danger').append($("<strong>").text("Izvinjavamo se " + name + ", izgleda da je došlo do greške. Molim pokušajte ponovo ili nas kontaktirajte na sudskitumacbl@gmail.com"));
            //         $('#success > .alert-danger').append('</div>');
            //         $('#contactForm').trigger("reset");
            //     },
            //     complete: function () {
            //         setTimeout(function () {
            //             $this.prop("disabled", false);
            //         }, 1000);
            //     }
            // });
        },
        filter: function () {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function (e) {
        e.preventDefault();
        $(this).tab("show");
    });
});

$('#name').focus(function () {
    $('#success').html('');
});

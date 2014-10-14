var content = document.querySelector('.container');
var duplicate = content.cloneNode(true);
duplicate.removeAttribute("id");
var contentBlurred = document.createElement('div');
contentBlurred.className = 'content-blurred';
contentBlurred.appendChild(duplicate);

var header = document.querySelector('.blurredwrap');
header.appendChild(contentBlurred);

var contentWrapper = window,
translation;

contentWrapper.addEventListener('scroll',function(){
    if($(window).width() < 800) return;
  translation = 'translate3d(0,' + (-$(window).scrollTop() + 'px') + ',0)';
  duplicate.style['-webkit-transform'] = translation;
  duplicate.style['-moz-transform'] = translation;
  duplicate.style['transform'] = translation;
});


var nav = $("header nav");
var pos = nav.offset();

$(window).resize(function() {
$(".blurredwrap").css({
    top: pos.top,
    left: pos.left,
    height: nav.height(),
});

$(contentBlurred).css({
    top: -pos.top,
    left: -pos.left,
    width: $(window).width()
});

});

$(window).resize();


stripeKey = "pk_live_BXRjo7MBwBvPSNM1338ZQVj3";
paymentsServer = "http://payments.gopilot.org";

var finished = function() {
    console.log("DONE", arguments);
    $("#main #donate").hide();
    $("#main .success").text("Thank you! Your receipt should arrive in your inbox soon.").show();
    $("#main .status").hide();
};

var error = function(res) {
    var err = JSON.parse(res.responseText);
    console.log(arguments);
    $("#main .error").text("WHOOPS: " + err.message);

    $("#main .status").hide();
};

var handler = StripeCheckout.configure({
    key: stripeKey,
    image: "/img/logo_square.png",
    token: function(token, args) {
        console.log("stripe callback", token, total);
        $.ajax({
            url: paymentsServer,
            type: "POST",
            data: {
                card: token.id,
                amount: total,
                email: token.email
            },
            success: finished,
            error: error,
        });
        $("#main .status").text("Processing...").show();
    },
});

$("#main #donate").submit(function(e) {
    e.preventDefault();
    total = parseFloat($("#main .donation-amount").val()) * 100;
    handler.open({
        	name: "Pilot",
			description: "Donation",
			amount: total,
            email: $("#main .email").val(),
    });
    /*Stripe.card.createToken({
        number: $('#main .card-number').val(),
        cvc: $('#main .card-cvc').val(),
        exp_month: $('#main .card-expiry-month').val(),
        exp_year: $('#main .card-expiry-year').val()
    }, stripeResponseHandler);*/
});

// header fix js
var mn = $(".main-nav");
mns = "nav-scrolled";
hdr = $('.navbar').height();
vh  = $('#carousel-slider').height();

$(window).scroll(function() {
  if($(this).scrollTop()> vh) {
    $('#go-top').css("opacity","1");
  } else {
    $('#go-top').css("opacity","0");
  }
});
// margin top js for fix space
$("body").css("margin-top", hdr);

/* nav color controls from hare*/
$(".nav a").on("click",function(){
  $(".navbar-collapse").removeClass('in')
})

// it can be use for stycky nav
$(window).scroll(function() {
    if ($(this).scrollTop() > hdr) {
        mn.addClass(mns);
    } else {
        mn.removeClass(mns);
    }
});

// owl carousel jquery
$(".owl-carousel").owlCarousel({
    items: 4,
    nav: true,
    navElement: "a",
    loop: true,
    margin: 15,
    autoplay: false,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 2,
            nav: true
        },
        1000: {
            items: 4,
            nav: true,
        }
    }
});
$(".owl-nav").addClass("pager");
$(".owl-prev").addClass("btn btn-default");
$(".owl-next").addClass("btn btn-default");


// Select all links with hashes
$('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 300, function() {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });
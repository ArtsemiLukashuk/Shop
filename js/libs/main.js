// owlCarousel start
$(function () {
    var owl = $(".owl-carousel");
    owl.owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        smartSpeed: 1000,
        animateOut: 'fadeOut',
    });
});
// owlCarousel end

// smooth scrolling start
$(window).on("load", function () {
    $("#navigation-menu a,a[href='#top'],a[rel='m_PageScroll2id']").mPageScroll2id({
        highlightSelector: "#navigation-menu a"
    });
});
// smooth scrolling end

// burger__menu start
$(document).ready(function () {
    $('.header__burger').click(function () {
        $('.header__burger, .header__nav').toggleClass('active');
        $('body').toggleClass('lock');
    });

    $('.header__nav').click(function () {
        $('.header__burger, .header__nav').removeClass('active');
        $('body').removeClass('lock');
    });
});
// burger__menu end

// wow start
new WOW().init();
// wow end


// magnificPopup start
$(document).ready(function () {
    $('.popup-youtube').magnificPopup({
        type: 'iframe',
        // other options
        iframe: {
            markup: '<div class="mfp-iframe-scaler">' +
                '<div class="mfp-close"></div>' +
                '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
                '</div>',
            patterns: {
                youtube: {
                    index: 'youtube.com/',
                    id: 'v=',
                    src: 'https://www.youtube.com/embed/%id%'
                },
            },
            srcAction: 'iframe_src',
        }
    });
});
// magnificPopup end


// upbtn start
$('body');
$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('.up-button').css({
            transform: 'scale(1)'
        });
    } else {
        $('.up-button').css({
            transform: 'scale(0)'
        });
    }
});
$('.up-button').on('click', function () {
    $('html, body').animate({
        scrollTop: 0
    }, 600);
    return false;
});

var upButtonSize = document.querySelector(".up-button__size");

window.addEventListener("scroll", function () {
    var documentHeight = document.body.clientHeight;
    var scrollHeight = window.scrollY;
    var windowHeight = window.innerHeight;

    var scrollPercent = (scrollHeight / (documentHeight - windowHeight)) * 100

    upButtonSize.style.height = scrollPercent + "%";
});
// upbtn end
$('.wrapper-item-nav a').on('click', function() {

    let href = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(href).offset().top
    }, {
        duration: 400,   
        easing: "linear"
    });

    return false;
});

$(".js-btn").on('click', function() {
    $('html, body').animate({
        scrollTop: $('.section-contact-me').offset().top
    }, 400);
});
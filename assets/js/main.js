$(document).ready(function ($) {
    "use strict";
    //single progress bar      
    $('#cirlc-1').circleProgress({
        value: 0.80,
        size: 150,
        thickness: 8,
        fill: '#ffe600',
        emptyFill: '#fff',

    }).on('circle-animation-progress', function (event, progress) {
        $(this).find('.circle-inner').html(Math.round(80 * progress) + '<i>%</i>');
    });

    //single progress bar

    $('#cirlc-2').circleProgress({
        value: 0.96,
        size: 150,
        thickness: 8,
        fill: '#ffe600',
        emptyFill: '#fff',

    }).on('circle-animation-progress', function (event, progress) {
        $(this).find('.circle-inner').html(Math.round(96 * progress) + '<i>%</i>');
    });

    //single progress bar

    $('#cirlc-3').circleProgress({
        value: 0.85,
        size: 150,

        thickness: 8,
        fill: '#ffe600',
        emptyFill: '#fff',

    }).on('circle-animation-progress', function (event, progress) {
        $(this).find('.circle-inner').html(Math.round(85 * progress) + '<i>%</i>');
    });

    //single progress bar

    $('#cirlc-4').circleProgress({
        value: 0.70,
        size: 150,

        thickness: 8,
        fill: '#ffe600',
        emptyFill: '#fff',
    }).on('circle-animation-progress', function (event, progress) {
        $(this).find('.circle-inner').html(Math.round(70 * progress) + '<i>%</i>');
    });

    // // Mixitup
    var mixer = mixitup('.portfolio-content');

    // ---- Active Owl Carousel
    // Slider Section
    $('.slider').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        item: 1,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
    // Our Clinet
    $('.owl-carousel-client').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        items: 5,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 5
            }
        }
    })
    // Owl Next Privew Change
    //$(".owl-prev").html('<i class="fa screenshort-arow fa-chevron-left"></i>');
    //$(".owl-next").html('<i class="fa screenshort-arow fa-chevron-right"></i>');

    // Our Team Section
    $('.team-owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        item: 4,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    })
    // Owl Next Privew Change
    //$( ".owl-prev").html('<i class="fa screenshort-arow fa-chevron-left"></i>');
    //$( ".owl-next").html('<i class="fa screenshort-arow fa-chevron-right"></i>');
    
    // Testimonial Section
    $('.testimonial').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        item: 1,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
    // Owl Next Privew Change
    //$( ".owl-prev").html('<i class="fa screenshort-arow fa-chevron-left"></i>');
    //$( ".owl-next").html('<i class="fa screenshort-arow fa-chevron-right"></i>');


    // Cunter Up

    $('.counter').each(function () {
        var $this = $(this),
            countTo = $this.attr('data-count');

        $({
            countNum: $this.text()
        }).animate({
                countNum: countTo
            },

            {

                duration: 8000,
                easing: 'linear',
                step: function () {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function () {
                    $this.text(this.countNum);
                    //alert('finished');
                }

            });
    });
    ////////////////////////
}(jQuery));
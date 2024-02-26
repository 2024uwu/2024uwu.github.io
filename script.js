$(document).ready(function(){
    // Initialize the Slick carousel
    $('.img-slick').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        focusOnSelect: true,
        cssEase: 'ease-out',
        asNavFor: '.text-slick',
        responsive: [
            {
                breakpoint: 650,
                settings: {
                    centerMode: false,
                    focusOnSelect: false,
                    slidesToShow: 1,
                    slidesToScroll: 1

                }
            }
        ]
    })
    });

    // Initialize the Slick carousel for text
    $('.text-slick').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        draggable: false,
        fade: true,
        asNavFor: '.img-slick',
    });
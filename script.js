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
    
})

const hamburger = document.querySelector(".hamburger");
const navmenu = document.querySelector(".navlinks")
const logo = document.querySelector(".logo");
const body = document.querySelector(".body");

hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active");
    navmenu.classList.toggle("active");
    logo.classList.toggle("active");
    body.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", ()=>{
    hamburger.classList.remove("active");
    navmenu.classList.remove("active");
}
))


let dakrmode = localStorage.getItem('darkmode');

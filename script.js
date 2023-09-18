const menu = document.querySelector('.menu');
const closer = document.querySelector('.close');
const ul = document.querySelector('.ul');


menu.onclick = () =>{
    ul.style.display = "block";
    menu.style.display = "none";
    closer.style.display = "flex";
}

closer.onclick = () =>{
    ul.style.display = "none";
    closer.style.display = "none";
    menu.style.display = "flex";
}

$(document).ready(function() {

    $('#hero-carousel').owlCarousel({
        items: 1,
        dots: false,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true
    })
    $('#for').owlCarousel({
        items: 2.7,
        dots: false,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true
    })
})
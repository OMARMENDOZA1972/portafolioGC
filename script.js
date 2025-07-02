/*----------------------- Toggle icon NavBar----------------------*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*---------Scroll sections outive link----------------*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a ');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

            if(top >= offset && top < offset + height) {
                navLinks.forEach(links => {
                    links.classList.remove('active');
                    document.querySelector('header nav a[ href *=' + id +']');
                });
            };
    });


/*----------------------Sticky Navbar--------------------------------*/
let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100);

/*--------------------Remove Toggle icon and Navbar when click navbar Link (scroll)-----------------------------*/
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');
};

/*------------------------Scroll Reveal-----------------------------------*/
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScroollReveal().reveal('.home-content, .heading',{ origin: 'top'});
ScroollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact-form',{ origin: 'bottom'});
ScroollReveal().reveal('.home-content h1, .about-img',{ origin: 'left'});
ScroollReveal().reveal('.home-content p, .about-content',{ origin: 'right'});

/*---------------------------TypedJS------------------------------------------*/
const TypedJS = new Typed('.multiple-text',{
    strings:['Backend developer', 'JavaScript Developer', 'SQL', 'Marchine Learning'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
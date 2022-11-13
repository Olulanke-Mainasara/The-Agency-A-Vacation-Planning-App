/*---------Pre-load animations----------*/
        
gsap.to('.layer1', {y: '-100vh', delay: .7});
gsap.to('.layer2', {y: '-100vh', delay: .9});
gsap.to('.layer3', {y: '-100vh', delay: 1.1});
gsap.to('.overlay', {y: '-100vh', delay: 1.6});

gsap.to('.subtext1', {opacity: 1, delay: 1.9, duration: 0.5});
gsap.to('.subtext2', {opacity: 1, delay: 2.0, duration: 0.5});
gsap.to('.subtext3', {opacity: 1, delay: 2.1, duration: 0.5});
gsap.to('.text', {opacity: 0, delay: 2.9});
gsap.to('.overlay-text', {x: '-100vw', delay: 3.5, duration: 1});



/*-----------------------Script for bringing out the login selections------------------------*/

const logselect = document.getElementById("logselect");
const selections = document.querySelectorAll(".selection");

function openselect() {
    for(var i = 0; i < selections.length; i++){
        selections[i].style.opacity = "1";
    }
    
    logselect.style.cursor = "default";
}



/*---------------Script for bringing out and pushing in the Nav-menu for phone screens---------------*/

var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}

function closemenu() {
    sidemenu.style.right = "-280px";
}



/*---------------Script for the header images slider---------------*/

new Glide(".heroGlide", {
    type: "carousel",
    perView: 1,
    gap: 0,
    autoplay: 6000,
    animationDuration: 2000,
}).mount();



/*---------------Script for the reviews slider---------------*/

new Glide(".glide", {
    type: "carousel",
    autoplay: 5000,
    perView: 4,
    gap: 0,
    hoverpause: false,
    focusAt: 'center',
    animationDuration: 1000,
    breakpoints: {
        1302: {
            perView: 2
        },
        600: {
            perView: 1,
        }
    },
}).mount();
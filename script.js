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



/*---------------Script for the image slider---------------*/

responsiveSlider()

function responsiveSlider() {

    var slider = document.getElementById("slider");
    var sliderWidth = slider.offsetWidth;
    var slideList = document.getElementById("slideWrap");
    var count = 1;
    var items = slideList.querySelectorAll("li").length;
    var prev = document.getElementById("prev");
    var next = document.getElementById("next");

    window.addEventListener('resize', function() {
        sliderWidth = slider.offsetWidth;
    });

    var prevSlide = function() {
        if(count > 1) {
            count = count - 2;
            slideList.style.left = "-" + count * sliderWidth + "px";
            count++;
        }

        else if(count = 1) {
            count = items - 1;
            slideList.style.left = "-" + count * sliderWidth + "px";
            count++;
        }
    };

    var nextSlide = function() {
        if(count < items) {
            slideList.style.left = "-" + count * sliderWidth + "px";
            count++;
        }
        else if(count = items) {
            slideList.style.left = "0px";
            count = 1;
        }
    };

    next.addEventListener("click", function() {
        nextSlide();
    });

    prev.addEventListener("click", function() {
        prevSlide();
    });

    setInterval(nextSlide, 8000);
}
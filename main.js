let mainLocation = window.pageYOffset;

// navbar
window.addEventListener("scroll", function(){
    let currentLocation = window.pageYOffset;
    if (mainLocation >= currentLocation){
        document.getElementById("nav-bar").style.top = "0px"
    }else {
        document.getElementById("nav-bar").style.top = "-100px"
    }
    mainLocation = currentLocation
})

//carousel

let slidePosition = 0;
const slides = document.getElementsByClassName('carousel-item')
const totalSlides = slides.length;

console.log(totalSlides);

document.getElementById('carousel-button-next').addEventListener("click", function(){
    moveToNextSlide();
});

function updateSlidePosition(){
    for(let slide of slides){
        slide.classList.remove('carousel-item--visible');
        slide.classList.add('carousel-item--hidden');

    }
    slides[slidePosition].classList.add('carousel-item--visible')
}


document.getElementById('carousel-button-prev').addEventListener("click", function(){
    moveToPrevSlide();
});

function moveToNextSlide(){
    if(slidePosition == totalSlides-1){
        slidePosition = 0;
    }else{
        slidePosition ++;
    }
    updateSlidePosition();
}
function moveToPrevSlide(){
    if(slidePosition == 0){
        slidePosition = totalSlides - 1;
    }else{
        slidePosition --;
    }
    updateSlidePosition();
}

// CONTACTO



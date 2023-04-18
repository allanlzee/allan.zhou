let slideIndex = 1; 

showSlides(slideIndex); 

/**
 * 
 * @param {*} slideNum desired slide number (integer)
 * @param {*} slideClass desired slide string 
 * @param {*} dotClass desired dot string
 */
function plusSlides(slideNum, slideClass, dotClass) {
    showSlides(slideIndex += slideNum, slideClass, dotClass); 
}

/**
 * 
 * @param {*} slideNum desired slide number (integer)
 * @param {*} slideClass desired slide string 
 * @param {*} dotClass desired dot string
 */
function currentSlide(slideNum, slideClass, dotClass) {
    showSlides(slideIndex = slideNum, slideClass, dotClass);
}

/**
 * 
 * @param {*} slideNum desired slide number (integer)
 * @param {*} slideClass desired slide string 
 * @param {*} dotClass desired dot string
 */
function showSlides(slideNum, slideClass, dotClass) {
    let i; 
    let slides = document.getElementsByClassName(slideClass); 
    let dots = document.getElementsByClassName(dotClass); 

    if (slideNum > slides.length) {
        slideIndex = 1;
    }

    if (slideNum < 1) {
        slideIndex = slides.length; 
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", ""); 
    }

    slides[slideIndex - 1].style.display = "block"; 

    dots[slideIndex - 1].className += " active"; 
}
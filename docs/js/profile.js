let slideIndex = 0; 
slideshow();

function slideshow() {
    let index; 

    let slides = document.getElementsByClassName("intro-img-div"); 

    for (index = 0; index < slides.length; index++) {
        slides[index].style.display = "none"; 
    }

    slideIndex++; 

    if (slideIndex > slides.length) {
        slideIndex = 1; 
    }

    slides[slideIndex - 1].style.display = "relative"; 
    setTimeout(slideshow, 2000); 
}
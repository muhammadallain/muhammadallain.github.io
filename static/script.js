function openTab(event, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.className += " active";
  }
  
// Set the first tab as active by default
document.getElementsByClassName("tablink")[0].click();
  
var slides = document.querySelectorAll('.slide');
var currentSlide = 0;

function showSlide(n) {
    slides[currentSlide].style.display = 'none';
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].style.display = 'block';
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Optional: Add event listeners for slideshow navigation
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.prev').addEventListener('click', prevSlide);
    document.querySelector('.next').addEventListener('click', nextSlide);
});

// Show the first slide
showSlide(currentSlide);


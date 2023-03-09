
//=========================================================
//              Inicio Slider
//=========================================================
const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let currentSlide = 0;

// Ocultar todas las imágenes, excepto la primera
for (let i = 1; i < slides.length; i++) {
  slides[i].style.display = 'none';
}

// Función para mostrar la siguiente imagen
function nextSlide() {
  slides[currentSlide].style.display = 'none';
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].style.display = 'block';
}

// Función para mostrar la imagen anterior
function prevSlide() {
  slides[currentSlide].style.display = 'none';
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  slides[currentSlide].style.display = 'block';
}

// Agregar eventos a los botones de prev y next
prev.addEventListener('click', prevSlide);
next.addEventListener('click', nextSlide);
//================================================================
//            Fin Slider
//================================================================


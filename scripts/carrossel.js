document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelector('.slides');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  const totalSlides = document.querySelectorAll('.slides img').length; // Total de imagens no carrossel
  let slideIndex = 0;

  function mostrarSlide() {
    // Move o carrossel para o slide atual
    slides.style.transform = `translateX(-${slideIndex * 100}%)`;
  }

  if (prevButton && nextButton) {
    prevButton.addEventListener('click', () => {
      // Volta para o slide anterior (com loop)
      slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
      mostrarSlide();
    });

    nextButton.addEventListener('click', () => {
      // Avança para o próximo slide (com loop)
      slideIndex = (slideIndex + 1) % totalSlides;
      mostrarSlide();
    });

    // Troca automática de slides a cada 5 segundos
    setInterval(() => {
      slideIndex = (slideIndex + 1) % totalSlides;
      mostrarSlide();
    }, 5000);
  }
});
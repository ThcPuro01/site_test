let slideAtual = 0;
const slides = document.querySelectorAll('.slide');
const indicadores = document.querySelectorAll('.indicador');
let intervaloCarrossel;

function iniciarCarrossel() {
  intervaloCarrossel = setInterval(() => {
    mudarSlide(1);
  }, 5000);
}

function mostrarSlide(n) {
  // Esconde todos os slides
  slides.forEach(slide => {
    slide.classList.remove('active');
  });

  // Remove a classe active de todos os indicadores
  indicadores.forEach(ind => {
    ind.classList.remove('active');
  });

  // Atualiza o slide atual
  slideAtual = (n + slides.length) % slides.length;

  // Mostra o slide atual
  slides[slideAtual].classList.add('active');
  indicadores[slideAtual].classList.add('active');

  // Reinicia o intervalo
  clearInterval(intervaloCarrossel);
  iniciarCarrossel();
}

function mudarSlide(n) {
  mostrarSlide(slideAtual + n);
}

function irParaSlide(n) {
  mostrarSlide(n);
}

// Inicializa o carrossel
document.addEventListener('DOMContentLoaded', () => {
  mostrarSlide(0);
  iniciarCarrossel();
});
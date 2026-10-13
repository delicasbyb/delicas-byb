const enlaces = document.querySelectorAll('a[href^="#"]');

enlaces.forEach((enlace) => {
  enlace.addEventListener('click', (evento) => {
    const destino = document.querySelector(enlace.getAttribute('href'));
    if (!destino) return;

    evento.preventDefault();
    destino.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

const elementosAnimados = document.querySelectorAll('.producto, .historia-contenido, .historia-foto');
const observador = new IntersectionObserver((entradas) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add('visible');
      observador.unobserve(entrada.target);
    }
  });
}, { threshold: 0.15 });

elementosAnimados.forEach((elemento) => {
  elemento.classList.add('revelar');
  observador.observe(elemento);
});

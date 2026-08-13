window.addEventListener("scroll", function() {
  const navbar = document.querySelector(".navbar-custom");
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});


const elementosFade = document.querySelectorAll(".fade-in");

const observador = new IntersectionObserver(function(elementos) {

  elementos.forEach(function(elemento) {
    if (elemento.isIntersecting) {
      elemento.target.classList.add("visible");
    }
  });

});

elementosFade.forEach(function(elemento) {
  observador.observe(elemento);
});


const formularioConsulta = document.querySelector("#form-consulta");

formularioConsulta.addEventListener("submit", function(evento) {

    evento.preventDefault();

    const numeroPedido = document.querySelector("#numero-pedido").value;

    console.log("Número de pedido:", numeroPedido);

});
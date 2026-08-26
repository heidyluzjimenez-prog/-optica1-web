/*NAVBAR*/
window.addEventListener("scroll", function() {
  const navbar = document.querySelector(".navbar-custom");
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});


/*ANIMACION*/
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

/*PEDIDOS*/
const pedidos = {
    "OP-00125": {
        cliente: "María G.",
        estado: "En fabricación",
        fecha: "25 de agosto de 2026",
        tipo: "Lentes formulados"
    },

    "OP-00126": {
        cliente: "Carlos R.",
        estado: "Listo para entregar",
        fecha: "22 de agosto de 2026",
        tipo: "Lentes antirreflejo"
    },

    "OP-00127": {
        cliente: "Laura M.",
        estado: "Entregado",
        fecha: "20 de agosto de 2026",
        tipo: "Lentes formulados"
    }
};

/*CONSULTA*/
const formularioConsulta = document.querySelector("#form-consulta");

if (formularioConsulta) {

formularioConsulta.addEventListener("submit", function(evento) {

    evento.preventDefault();

    const numeroPedido = document.querySelector("#numero-pedido").value;

    const resultado = document.querySelector("#resultado-pedido");

    if (pedidos[numeroPedido]) {

        const estadoPedido = pedidos[numeroPedido].estado;

        let claseEstado = "";

        if (estadoPedido === "En fabricación") {
            claseEstado = "estado-fabricacion";
        } else if (estadoPedido === "Listo para entregar") {
            claseEstado = "estado-listo";
        } else if (estadoPedido === "Entregado") {
            claseEstado = "estado-entregado";
        }

        resultado.innerHTML = `

            <div class="resultado-pedido">
                <h4>
                    <i class="bi bi-check-circle-fill text-success"></i>
                    Pedido encontrado
                </h4>

                <p>
                    <strong>Número de pedido:</strong> ${numeroPedido}
                </p>

                <p>
                    <strong>Cliente:</strong> ${pedidos[numeroPedido].cliente}
                </p>

                <p>
                    <strong>Tipo de lente:</strong> ${pedidos[numeroPedido].tipo}
                </p>

                <p>
                    <strong>Estado:</strong>
                    <span class="estado-pedido ${claseEstado}">
                        ${estadoPedido}
                    </span>
                </p>

                <p>
                <strong>Fecha estimada:</strong> ${pedidos[numeroPedido].fecha}
                </p>
            </div>

            
            <button type="button" class="btn-nueva-consulta mt-3" id="nueva-consulta">
                <i class="bi bi-arrow-repeat"></i>
                Nueva consulta
            </button>
            
    `;

    } else {

        resultado.innerHTML = `
            <div class="resultado-pedido">
                <h4>
                    <i class="bi bi-exclamation-circle-fill text-danger"></i>
                        Pedido no encontrado
                    </h4>

                    <p>
                        No encontramos un pedido con el número:
                        <strong>${numeroPedido}</strong>
                    </p>

                    <p>
                        Verifica el número ingresado e inténtalo nuevamente.
                    </p>

                    <button type="button" class="btn-nueva-consulta mt-3" id="nueva-consulta">
                        <i class="bi bi-arrow-repeat"></i>
                        Nueva consulta
                    </button>
              </div>
    `     ;

    }


 /* DESPLAZAMIENTO AL RESULTADO */
    resultado.scrollIntoView({
    behavior: "smooth",
    block: "center"
});

});

}

/* NUEVA CONSULTA */
document.addEventListener("click", function(evento) {

    if (evento.target.closest("#nueva-consulta")) {

        document.querySelector("#numero-pedido").value = "";
        document.querySelector("#resultado-pedido").innerHTML = "";

        document.querySelector("#numero-pedido").focus();
    }

});

/* FORMULARIO DE CONTACTO */
const formularioContacto = document.querySelector("#form-contacto");

if (formularioContacto) {

    formularioContacto.addEventListener("submit", function(evento) {

        evento.preventDefault();

        const nombre = document.querySelector("#nombre").value;
        const telefono = document.querySelector("#telefono").value;
        const correo = document.querySelector("#correo").value;
        const mensaje = document.querySelector("#mensaje").value;

        const textoWhatsApp = `
Hola, soy ${nombre}.

Teléfono: ${telefono}
Correo: ${correo}

Mensaje:
${mensaje}
        `;

        const mensajeCodificado = encodeURIComponent(textoWhatsApp);

        const numeroWhatsApp = "573182627710";

        const enlaceWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensajeCodificado}`;

        window.open(enlaceWhatsApp, "_blank");

    });

}
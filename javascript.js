// Menú responsive
const botonMenu = document.getElementById("botonMenu");
const navegacion = document.getElementById("navegacion");

botonMenu.addEventListener("click", function () {
    navegacion.classList.toggle("activo");
});

// Formulario
const formulario = document.getElementById("formRegistro");
const mensaje = document.getElementById("mensaje");

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const carrera = document.getElementById("carrera").value;
    const modalidad = document.querySelector('input[name="modalidad"]:checked');
    const terminos = document.getElementById("terminos").checked;

    mensaje.style.color = "red";

    if (!nombre || !correo || !telefono || !carrera || !modalidad || !terminos) {
        mensaje.textContent = "Completa todos los campos y acepta recibir información.";
        return;
    }

    if (!correo.includes("@")) {
        mensaje.textContent = "Ingresa un correo válido.";
        return;
    }

    mensaje.style.color = "green";
    mensaje.textContent = "¡Registro realizado correctamente!";
    alert("¡Registro realizado correctamente!");
    formulario.reset();
});
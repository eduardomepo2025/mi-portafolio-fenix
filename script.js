const formulario = document.getElementById('mi-formulario')
const mensaje = document.getElementById('mensaje-exitoso')

formulario.addEventListener('submit', function(evento){
    evento.preventDefault(); //Evita que la página se recargue
    mensaje.textContent = "¡Gracias por suscribirte! Te avisaremos pronto.";
    mensaje.style.color = "green";
    formulario.style.display = "none"; // Ocultamos el formulario déspues de enviar
})
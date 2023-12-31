const form = document.getElementById('passwordResetForm');
const emailInput = document.getElementById('email-recover');
const errorElement = document.getElementById('errorEmail');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para validar correo electrónico

// Correo electrónico válido para la demostración
const correoValido = 'gymsystem@gmail.com';

form.addEventListener('submit', (event) => {
    const email = emailInput.value.trim();

    if (email === '') {
        errorElement.textContent = 'Ingrese un correo electrónico';
        event.preventDefault(); // Evita enviar el formulario si hay errores
    } else if (!emailRegex.test(email)) {
        errorElement.textContent = 'Ingrese un correo electrónico válido';
        event.preventDefault(); // Evita enviar el formulario si hay errores
    } else {
        if (email === correoValido) {
            errorElement.textContent = '';
            // Redirige a otra página directamente
            window.location.href = '/confirmacion'; // Reemplaza con la URL correcta
        } else {
            errorElement.textContent = 'Correo no válido. Intente nuevamente ';
            event.preventDefault(); // Evita enviar el formulario si hay errores
        }
    }
});

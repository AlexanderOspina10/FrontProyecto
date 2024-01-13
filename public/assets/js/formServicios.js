const formularioRegistro = document.getElementById('formularioRegistro');
const inputsServicios = document.querySelectorAll('#formularioRegistro input');

const expresionesServicios = {
    cantidad: /^(?:[1-9]|10)$/
};

const camposServicios = {
    cantidad: 1
};

const validarFormularioServicios = (e) => {
    switch (e.target.name) {
        case "cantidadServicio":
            validarCampoServicios(expresionesServicios.cantidad, e.target, 'cantidad');
            break;
    }
};

const validarCampoServicios = (expresion, input, campo) => {
    if (expresion.test(input.value)) {
        document.getElementById(`grupo__${campo}`).classList.remove('formularioRegistro__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.add('formularioRegistro__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo__${campo} .formularioRegistro__input-error`).classList.remove('formularioRegistro__input-error-activo');
        camposServicios[campo] = true;
    } else {
        document.getElementById(`grupo__${campo}`).classList.add('formularioRegistro__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.remove('formularioRegistro__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
        document.querySelector(`#grupo__${campo} .formularioRegistro__input-error`).classList.add('formularioRegistro__input-error-activo');
        camposServicios[campo] = false;
    }
};

inputsServicios.forEach((input) => {
    input.addEventListener('keyup', validarFormularioServicios);
    input.addEventListener('blur', validarFormularioServicios);
});

formularioRegistro.addEventListener('submit', (e) => {
    e.preventDefault();

    if (camposServicios.cantidad > 0) {
        formularioRegistro.reset();

        Swal.fire({
            title: "Excelente!",
            text: "Los servicios se guardaron de manera exitosa!",
            icon: "success"
        });

        document.querySelectorAll('.formularioRegistro__grupo-correcto').forEach((icono) => {
            icono.classList.remove('formularioRegistro__grupo-correcto');
        });
    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Ingresa los datos correctos",
        });
    }
});
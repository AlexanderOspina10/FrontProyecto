const formularioRegistro2 = document.getElementById('formularioRegistro2');
    const inputsProductos = document.querySelectorAll('#formularioRegistro2 input');

    const expresionesProductos = {
        cantidad: /^(?:[1-9]|10)$/
    };

    const camposProductos = {
        cantidad: 1
    };

    const validarFormularioProductos = (e) => {
        switch (e.target.name) {
            case "cantidadProducto":
                validarCampoProductos(expresionesProductos.cantidad, e.target, 'cantidadProducto');
                break;
        }
    };

    const validarCampoProductos = (expresion, input, campo) => {
        if (expresion.test(input.value)) {
            document.getElementById(`grupo__${campo}`).classList.remove('formularioRegistro2__grupo-incorrecto');
            document.getElementById(`grupo__${campo}`).classList.add('formularioRegistro2__grupo-correcto');
            document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
            document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
            document.querySelector(`#grupo__${campo} .formularioRegistro2__input-error`).classList.remove('formularioRegistro2__input-error-activo');
            camposProductos[campo] = true;
        } else {
            document.getElementById(`grupo__${campo}`).classList.add('formularioRegistro2__grupo-incorrecto');
            document.getElementById(`grupo__${campo}`).classList.remove('formularioRegistro2__grupo-correcto');
            document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
            document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
            document.querySelector(`#grupo__${campo} .formularioRegistro2__input-error`).classList.add('formularioRegistro2__input-error-activo');
            camposProductos[campo] = false;
        }
    };

    inputsProductos.forEach((input) => {
        input.addEventListener('keyup', validarFormularioProductos);
        input.addEventListener('blur', validarFormularioProductos);
    });

    formularioRegistro2.addEventListener('submit', (e) => {
        e.preventDefault();

        if (camposProductos.cantidad > 0) {
            formularioRegistro2.reset();

            Swal.fire({
                title: "Excelente!",
                text: "Los productos se guardaron de manera exitosa!",
                icon: "success"
            });

            document.querySelectorAll('.formularioRegistro2__grupo-correcto').forEach((icono) => {
                icono.classList.remove('formularioRegistro2__grupo-correcto');
            });
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Ingresa los datos correctos",
            });
        }
    });
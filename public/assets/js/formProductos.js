const formularioRegistro2 = document.getElementById('formularioRegistro2')
const inputs = document.querySelectorAll('#formularioRegistro2 input')


const expresiones = {
    cantidad: /^(?:[1-9]|10)$/
}

const campos = {
    cantidad:1
}

const validarFormulario = (e) => {
    switch (e.target.name) {

        case "cantidad":
            validarCampo(expresiones.cantidad, e.target, 'cantidad')
        break
    }
}

const validarCampo = (expresion, input, campo) => {
    if (expresion.test(input.value)) {
        document.getElementById(`grupo__${campo}`).classList.remove('formularioRegistro2__grupo-incorrecto')
        document.getElementById(`grupo__${campo}`).classList.add('formularioRegistro2__grupo-correcto')
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle')
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle')
        document.querySelector(`#grupo__${campo} .formularioRegistro2__input-error`).classList.remove('formularioRegistro2__input-error-activo')
        campos[campo] = true
    }else {
        document.getElementById(`grupo__${campo}`).classList.add('formularioRegistro2__grupo-incorrecto')
        document.getElementById(`grupo__${campo}`).classList.remove('formularioRegistro2__grupo-correcto')
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle')
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle')
        document.querySelector(`#grupo__${campo} .formularioRegistro2__input-error`).classList.add('formularioRegistro2__input-error-activo')
        campo[false]
    }
}


inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario)
    input.addEventListener('blur', validarFormulario)
})

formularioRegistro2.addEventListener('submit', (e) =>{
    e.preventDefault();

    if (campos.cantidad>0) {
        formularioRegistro2.reset()

        Swal.fire({
            title: "Excelente!",
            text: "Los servicios se guardaron de manera exitosa!",
            icon: "success"
          });

          document.querySelectorAll('.formularioRegistro2__grupo-correcto').forEach((icono) => {
            icono.classList.remove('formularioRegistro2__grupo-correcto')
        })

    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Ingresa los datos correctos",
          });
    }

})
const formularioRegistro = document.getElementById('formularioRegistro')
const inputs = document.querySelectorAll('#formularioRegistro input')

const expresiones = {
	nombreCliente: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    documentoCliente: /^[0-9]{7,10}$/,
	correoCliente: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    direccionCliente: /^[A-Za-z0-9\s#áéíóúÁÉÍÓÚüÜ.,-]+$/,
	telefonoCliente: /^[0-9]{7,10}$/,
    password:  /^(?=.*[A-Z])(?=.*\d).+$/, // 4 a 12 digitos.
}

const campos = {
    nombreCliente: false, 
    documentoCliente: false, 
    correoCliente: false, 
    telefonoCliente: false, 
    direccionCliente: false,
    estadoCliente: true,
    password: false
}

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "nombreCliente":
            validarCampo(expresiones.nombreCliente, e.target, 'nombreCliente')
        break
        case "documentoCliente":
            validarCampo(expresiones.documentoCliente, e.target, 'documentoCliente')
        break
        case "correoCliente":
            validarCampo(expresiones.correoCliente, e.target, 'correoCliente')
        break
        case "telefonoCliente":
            validarCampo(expresiones.telefonoCliente, e.target, 'telefonoCliente')
        break
        case "direccionCliente":
            validarCampo(expresiones.direccionCliente, e.target, 'direccionCliente')
        break
        case "password":
            validarCampo(expresiones.password, e.target, 'password')
            validarPassword2()
        break
        case "confirmarPassword":
            validarPassword2()
        break
    }
}

const validarCampo = (expresion, input, campo) => {
    if (expresion.test(input.value)) {
        document.getElementById(`grupo__${campo}`).classList.remove('formularioRegistro__grupo-incorrecto')
        document.getElementById(`grupo__${campo}`).classList.add('formularioRegistro__grupo-correcto')
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle')
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle')
        document.querySelector(`#grupo__${campo} .formularioRegistro__input-error`).classList.remove('formularioRegistro__input-error-activo')
        campos[campo] = true
    }else {
        document.getElementById(`grupo__${campo}`).classList.add('formularioRegistro__grupo-incorrecto')
        document.getElementById(`grupo__${campo}`).classList.remove('formularioRegistro__grupo-correcto')
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle')
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle')
        document.querySelector(`#grupo__${campo} .formularioRegistro__input-error`).classList.add('formularioRegistro__input-error-activo')
        campo[false]
    }
}

const validarPassword2 = () =>{
    const inputPassword1 = document.getElementById('password')
    const inputPassword2 = document.getElementById('confirmarPassword')

    if (inputPassword1.value !== inputPassword2.value) {
        document.getElementById(`grupo__confirmarPassword`).classList.add('formularioRegistro__grupo-incorrecto')
        document.getElementById(`grupo__confirmarPassword`).classList.remove('formularioRegistro__grupo-correcto')
        document.querySelector(`#grupo__confirmarPassword i`).classList.remove('fa-check-circle')
        document.querySelector(`#grupo__confirmarPassword i`).classList.add('fa-times-circle')
        document.querySelector(`#grupo__confirmarPassword .formularioRegistro__input-error`).classList.add('formularioRegistro__input-error-activo')
        campos['password'] = false
    } else {
        document.getElementById(`grupo__confirmarPassword`).classList.remove('formularioRegistro__grupo-incorrecto')
        document.getElementById(`grupo__confirmarPassword`).classList.add('formularioRegistro__grupo-correcto')
        document.querySelector(`#grupo__confirmarPassword i`).classList.add('fa-check-circle')
        document.querySelector(`#grupo__confirmarPassword i`).classList.remove('fa-times-circle')
        document.querySelector(`#grupo__confirmarPassword .formularioRegistro__input-error`).classList.remove('formularioRegistro__input-error-activo')
        campos['password'] = true
    }
}


inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario)
    input.addEventListener('blur', validarFormulario)
})

formularioRegistro.addEventListener('submit', (e) =>{
    e.preventDefault();

    if (campos.documentoCliente && campos.nombreCliente && campos.correoCliente && campos.telefonoCliente && 
        campos.direccionCliente && campos.password ) {
        formularioRegistro.reset()

        Swal.fire({
            title: "Excelente!",
            text: "Cliente Registrado Correctamente!",
            icon: "success"
          })
          .then(() => {

            location.reload()
    
          })

          document.querySelectorAll('.formularioRegistro__grupo-correcto').forEach((icono) => {
            icono.classList.remove('formularioRegistro__grupo-correcto')
        })

    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Ingresa los datos correctos",
          });
    }
});


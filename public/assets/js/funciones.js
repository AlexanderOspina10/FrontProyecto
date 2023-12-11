const url = 'http://localhost:8585/cliente'

const listarClientes = async() => {
    //Objeto del html donde se deslegará la información
    let objectId = document.getElementById('contenido') 
    let contenido = ''//Contiene filas y celdas que se desplegarán en el tbody

    //Fecth permite reaizar peticiones http a una url
    fetch(url, {
        method: 'GET',
        mode: 'cors',
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then((res) => res.json())//Obtener respuesta de la petición
    .then(function(data){//Se manipulan los datos obtenidos de la url
        let listarClientes = data.msg //msg es el nombre de la lista retorna con json
        console.log(listarClientes)

        listarClientes.map(function (cliente) {
            //Configurar el objeto para enviarlo por url
            objetoCliente = Object.keys(cliente).map(key => key + '=' + 
            encodeURIComponent(cliente[key])).join('&');
            console.log(cliente)
            contenido = contenido + `<tr>`+
            `<td>`+"001"+`</td>`+
            `<td>`+cliente.documentoCliente+`</td>`+
            `<td>`+cliente.nombreCliente+`</td>`+
            `<td>`+cliente.telefonoCliente+`</td>`+
            `<td>`+cliente.correoCliente+`</td>`+
            `<td>`+cliente.estadoCliente+`</td>`+
            `<td  style="text-align: center;">
                                                    <div class="centered-container">
                                                    <i class="fa-regular fa-pen-to-square fa-xl me-2" onclick="abrirModalEditar('${objetoCliente}')"></i>
                                                        <i class="fa-regular fa-eye fa-xl me-2"></i>
                                                        <i class="fa-solid fa-trash fa-xl me-2 trash-icon" onclick="abrirModalEliminar('${objetoCliente}')"></i>
                                                        <div class="wrap-toggle" style="margin-top:10px;">
                                                            <input type="checkbox" id="toggle" class="offscreen" />
                                                            <label for="toggle" class="switch"></label>
                                                        </div>
                                                </td>`
            + `</tr>`
        })
        objectId.innerHTML = contenido
    })

    /*for(i = 1; i<10; i++){
        contenido = contenido + '<tr>'+
        '<td>nombre</td>'+
        '<td>rol</td>'+
        '<td>estado</td>'
    }
    */

}

const registrarCliente= () => {
    const nombreCliente = document.getElementById('nombreCliente').value;
    const documentoCliente = document.getElementById('documentoCliente').value
    const correoCliente = document.getElementById('correoCliente').value
    const telefonoCliente = document.getElementById('telefonoCliente').value
    const direccionCliente = document.getElementById('direccionCliente').value
    const password = document.getElementById('password').value
    const confirmarPassword = document.getElementById('confirmarPassword').value
    const estadoCliente = document.getElementById('estadoCliente').value


    if(documentoCliente.length == 0){
        document.getElementById('documentoClienteHelp').innerHTML = 'Dato requerido'
    } 
    else if(nombreCliente.length == 0){
        document.getElementById('nombreClienteHelp').innerHTML = 'Dato requerido'

    }
    else if(correoCliente.length == 0){
        document.getElementById('correoClienteHelp').innerHTML = 'Dato requerido'
    }
    else if(telefonoCliente.length == 0){
        document.getElementById('telefonoClienteHelp').innerHTML = 'Dato requerido'
    }  
    else if(direccionCliente.length == 0){
        document.getElementById('direccionClienteHelp').innerHTML = 'Dato requerido'
    }                                                                             
    else if(estadoCliente == ""){
        document.getElementById('estadoClienteHelp').innerHTML = 'Dato requerido'
    }
    else if(password.length == 0){
        document.getElementById('passwordHelp').innerHTML = 'Dato requerido'
    }
    else if(password != confirmarPassword){
        alert('Las contraseñas no coinciden')
    }
    else{
        let cliente = {
            nombreCliente: nombreCliente,
            documentoCliente: documentoCliente,
            correoCliente: correoCliente,
            telefonoCliente: telefonoCliente,
            direccionCliente: direccionCliente,
            password: password,
            estadoCliente: estadoCliente
        }
        
        //Fecth permite reaizar peticiones http a una url
        fetch(url, {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(cliente),//Convertir el objeto a JSON
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        .then((res) => res.json())//Obtener respuesta de la petición
        .then(json => {
            // alert(json.msg) //Imprimir el mensaje de la transacción
            document.getElementById('nombreCliente').value = ""
            document.getElementById('documentoCliente').value = ""
            document.getElementById('correoCliente').value = ""
            document.getElementById('telefonoCliente').value = ""
            document.getElementById('direccionCliente').value = ""
            document.getElementById('password').value= ""
            document.getElementById('confirmarPassword').value=""
            document.getElementById('estadoCliente').value = ""
        })
        }
}

const actualizarCliente= () => {
    const nombreCliente = document.getElementById('nombreCliente').value;
    const documentoCliente = document.getElementById('documentoCliente').value
    const correoCliente = document.getElementById('correoCliente').value
    const telefonoCliente = document.getElementById('telefonoCliente').value
    const direccionCliente = document.getElementById('direccionCliente').value
    const estadoCliente = document.getElementById('estadoCliente').value

   
    if(documentoCliente.length == 0){
        document.getElementById('documentoClienteHelp').innerHTML = 'Dato requerido'
    } 
    else if(nombreCliente.length == 0){
        document.getElementById('nombreClienteHelp').innerHTML = 'Dato requerido'

    }
    else if(correoCliente.length == 0){
        document.getElementById('correoClienteHelp').innerHTML = 'Dato requerido'
    }
    else if(telefonoCliente.length == 0){
        document.getElementById('telefonoClienteHelp').innerHTML = 'Dato requerido'
    }  
    else if(direccionCliente.length == 0){
        document.getElementById('direccionClienteHelp').innerHTML = 'Dato requerido'
    }                                                                             
    else if(estadoCliente == ""){
        document.getElementById('estadoClienteHelp').innerHTML = 'Dato requerido'
    }
    else{
        let cliente = {
            nombreCliente: nombreCliente,
            documentoCliente: documentoCliente,
            correoCliente: correoCliente,
            telefonoCliente: telefonoCliente,
            direccionCliente: direccionCliente,
            estadoCliente: estadoCliente
        }
        
        //Fecth permite reaizar peticiones http a una url
        fetch(url, {
            method: 'PUT',
            mode: 'cors',
            body: JSON.stringify(cliente),//Convertir el objeto a JSON
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        .then((res) => res.json())//Obtener respuesta de la petición
        .then(json => {
            // alert(json.msg) //Imprimir el mensaje de la transacción
            document.getElementById('nombreCliente').value = ""
            document.getElementById('documentoCliente').value = ""
            document.getElementById('correoCliente').value = ""
            document.getElementById('telefonoCliente').value = ""
            document.getElementById('direccionCliente').value = ""
            document.getElementById('estadoCliente').value = ""
        })
        }
}

const EliminarCliente = () => {
    const documentoCliente = document.getElementById('documentoClienteEliminar').value;

        let cliente = {
            documentoCliente: documentoCliente
        };

        // Fetch permite realizar peticiones HTTP a una URL
        fetch(url, {
            method: 'DELETE',
            mode: 'cors',
            body: JSON.stringify(cliente), // Enviar el objeto en el cuerpo de la solicitud
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
        .then((res) => res.json()) // Obtener respuesta de la petición
        .then(json => {
            // alert(json.msg); // Imprimir el mensaje de la transacción
            
        })
        .catch(error => {
            console.error('Error al eliminar cliente:', error);
        });
    }

    // Función para parsear la información del cliente
const parseClienteInfo = (objetoCliente) => {
    const cliente = {};
    const params = new URLSearchParams(objetoCliente);

    params.forEach((value, key) => {
        cliente[key] = value;
    });

    return cliente;
};


const abrirModalEditar = (objetoCliente) => {
    // Parsea la información del cliente de la URL
    const cliente = parseClienteInfo(objetoCliente);

    // Llena los campos del formulario con la información del cliente
    document.getElementById('documentoCliente').value = cliente.documentoCliente;
    document.getElementById('nombreCliente').value = cliente.nombreCliente;
    document.getElementById('correoCliente').value = cliente.correoCliente;
    document.getElementById('telefonoCliente').value = cliente.telefonoCliente;
    document.getElementById('direccionCliente').value = cliente.direccionCliente;
    document.getElementById('estadoCliente').value = cliente.estadoCliente;

    validarCamposModal();

     // Abre el modal
     $('#editarClienteModal').modal('show');
    
};

const abrirModalEliminar = (objetoCliente) => {
    // Parsea la información del cliente de la URL
    const cliente = parseClienteInfo(objetoCliente);

    // Abre el modal
    $('#eliminarClienteModal').modal('show');

    // Llena los campos del formulario con la información del cliente

    document.getElementById('documentoClienteEliminar').value = cliente.documentoCliente;
    document.getElementById('nombreClienteEliminar').value = cliente.nombreCliente;
    document.getElementById('correoClienteEliminar').value = cliente.correoCliente;
    document.getElementById('telefonoClienteEliminar').value = cliente.telefonoCliente;
    document.getElementById('direccionClienteEliminar').value = cliente.direccionCliente;
    document.getElementById('estadoClienteEliminar').value = cliente.estadoCliente;

     
};


if(document.querySelector('#btnRegistrar')){ //Si objeto exitste
document.querySelector('#btnRegistrar')
.addEventListener('click', registrarCliente)
}

if(document.querySelector('#btnActualizar')){//Si objeto existe
document.querySelector('#btnActualizar')
.addEventListener('click', actualizarCliente)
}

if(document.querySelector('#btnEliminar')){//Si objeto existe
    document.querySelector('#btnEliminar')
    .addEventListener('click', EliminarCliente)
    }
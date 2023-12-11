function agregarServicio(contenedor) {
    var nuevoServicioContainer = document.createElement("div");
    nuevoServicioContainer.className = "servicioContainer d-flex align-items-center";

    var nuevoSelect = document.createElement("select");
    nuevoSelect.name = "servicios[]";
    nuevoSelect.className = "form-select";
    nuevoSelect.style.width = "300px";

    var opciones = document.getElementById("selectServicio").innerHTML;
    nuevoSelect.innerHTML = opciones;

    var labelCantidad = document.createElement("label");
    labelCantidad.innerHTML = "Cantidad:";
    labelCantidad.className = "ms-3";

    var nuevaCantidad = document.createElement("input");
    nuevaCantidad.type = "number";
    nuevaCantidad.className = "form-control";
    nuevaCantidad.style.width = "90px";
    nuevaCantidad.value = "1";
    nuevaCantidad.min = "1";

    var labelValor = document.createElement("label");
    labelValor.innerHTML = "Valor:";
    labelValor.className = "ms-3";

    var labelValorP = document.createElement("label");
    labelValorP.innerHTML = "$23.000"; // Corregido el valor
    labelValorP.className = "ms-2";

    var btnEliminar = document.createElement("button");
    btnEliminar.type = "button";
    btnEliminar.className = "btn btn-soft-danger mt-2 ms-3";
    btnEliminar.innerHTML = '<i class="fa-solid fa-minus fa-lg"></i>';
    btnEliminar.onclick = function () {
        contenedor.removeChild(nuevoServicioContainer);
        contenedor.removeChild(btnEliminar);
    };

    nuevoServicioContainer.appendChild(nuevoSelect);
    nuevoServicioContainer.appendChild(labelCantidad);
    nuevoServicioContainer.appendChild(nuevaCantidad);
    nuevoServicioContainer.appendChild(labelValor);
    nuevoServicioContainer.appendChild(labelValorP);
    nuevoServicioContainer.appendChild(btnEliminar);

    contenedor.appendChild(nuevoServicioContainer);
}

function agregarProducto(contenedor) {
    var nuevoProductoContainer = document.createElement("div");
    nuevoProductoContainer.className = "productoContainer d-flex align-items-center";

    var nuevoSelect = document.createElement("select");
    nuevoSelect.name = "productos[]";
    nuevoSelect.className = "form-select";
    nuevoSelect.style.width = "300px";

    var opciones = document.getElementById("selectProducto").innerHTML;
    nuevoSelect.innerHTML = opciones;

    var labelCantidad = document.createElement("label");
    labelCantidad.innerHTML = "Cantidad:";
    labelCantidad.className = "ms-3";

    var nuevaCantidad = document.createElement("input");
    nuevaCantidad.type = "number";
    nuevaCantidad.className = "form-control";
    nuevaCantidad.style.width = "90px";
    nuevaCantidad.value = "1";
    nuevaCantidad.min = "1";

    var labelValor = document.createElement("label");
    labelValor.innerHTML = "Valor:";
    labelValor.className = "ms-3";

    var labelValorP = document.createElement("label");
    labelValorP.innerHTML = "$ 23.000";
    labelValorP.className = "ms-2";

    var btnEliminar = document.createElement("button");
    btnEliminar.type = "button";
    btnEliminar.className = "btn btn-soft-danger mt-2 ms-3";
    btnEliminar.innerHTML = '<i class="fa-solid fa-minus fa-lg"></i>';
    btnEliminar.onclick = function () {
        contenedor.removeChild(nuevoProductoContainer);
        contenedor.removeChild(btnEliminar);
        contenedor.removeChild(brElement);
    };

    var brElement = document.createElement("div");
    brElement.innerHTML = '&nbsp;';

    nuevoProductoContainer.appendChild(nuevoSelect);
    nuevoProductoContainer.appendChild(labelCantidad);
    nuevoProductoContainer.appendChild(nuevaCantidad);
    nuevoProductoContainer.appendChild(labelValor);
    nuevoProductoContainer.appendChild(labelValorP);
    nuevoProductoContainer.appendChild(btnEliminar);

    contenedor.appendChild(nuevoProductoContainer);
}


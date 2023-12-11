const express = require('express')
const path = require('path') //Trabajar con rutas
const hbs = require('hbs') //Incorporar motor de plantillas

const formArray = [];
const app = express()
const port = 8989


// Configuración del middleware para analizar datos POST
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'))

// Asignar la ubicacion de los archivos hbs
app.set('views', path.join(__dirname+'/public/views'))
// Ingenieria de las vistas hbs
app.set('view engine', 'hbs')
// Configuracion del directorio que guardara los archivos partials hbs
hbs.registerPartials(__dirname + '/public/views/partials')

app.get('/', (req, res)=>{
    res.render('index', {
        "nombre":"Juan Ortiz",
        "email":"juanes@gmail.com"
    })//Redireccionar hacia el archivo hbs
})

// INICIO GESTION ACCESO *JUANES*
app.get('/ingresar', (req, res)=>{
    res.render('auth/sign-in')
})

app.get('/registrar-usuario', (req, res)=>{
    res.render('auth/sign-up')
})

app.get('/recuperar-contrasena', (req, res)=>{
    res.render('auth/recoverpw')
})

app.get('/confirmacion', (req, res)=>{
    res.render('auth/confirm-mail')
})

app.get('/perfil', (req, res)=>{
    res.render('auth/user-account-setting')
})

app.get('/restablecer', (req, res)=>{
    res.render('auth/new-password')
})

// FIN GESTION ACCESO

// INICIO COMPRAS *ALEJANDRO*

app.get('/Proveedores', (req, res)=>{
    res.render('Proveedores')
})

app.get('/Compras', (req, res)=>{
    res.render('Compras')
})

app.get('/Productos', (req, res)=>{
    res.render('Productos')
})

app.get('/Devolucioncom', (req, res)=>{
    res.render('Devolucioncom')
})

app.get('/Categoriaprod', (req, res)=>{
    res.render('Categoriaprod')
})

app.get('/formproveedores', (req, res)=>{
    res.render('formproveedores')
})

// FIN COMPRAS


// INICIO SERVICIOS

//WEIMAR

app.get('/usuariosAdmin', (req, res)=>{
    res.render('usuariosAdmin')
})


app.get('/usuariosEntrenador', (req, res)=>{
    res.render('usuariosEntrenador')
})

app.get('/serviciosAdmin', (req, res)=>{
    res.render('serviciosAdmin')
})

app.get('/serviciosEntrenador', (req, res)=>{
    res.render('serviciosEntrenador')
})


app.get('/membresiasAdmin', (req, res)=>{
    res.render('membresiasAdmin')
})

app.get('/membresiasEntrenador', (req, res)=>{
    res.render('membresiasEntrenador')
})

app.get('/membresiasCliente', (req, res)=>{
    res.render('membresiasCliente')
})

// INICIO RUTINA *JUANES*

//Rutinas

app.get('/rutinas', (req, res)=>{
    res.render('rutinas', { datos: formArray});
});

app.get('/nueva-rutina', (req, res)=>{
    res.render('formRutina')
});

app.post('/guardar-rutinas', (req, res)=>{
    const { nombreRutina, dia, exercise1, repeticion } = req.body;

    formArray.push ({ nombreRutina, dia, exercise1, repeticion });

    res.redirect('/rutinas');
});

//



//FIN WEIMAR

// FIN SERVICIOS


// ROLES *JOHANY* 

app.get('/roles', (req, res)=>{
    res.render('roles')
})

// FIN ROLES

// Inicio Ventas *YONIER*

app.get('/clientes', (req, res)=>{
    res.render('clientes')
})
app.get('/beneficiarios', (req, res)=>{
    res.render('beneficiarios')
})
app.get('/formularioCliente', (req, res)=>{
    res.render('formularioCliente')
})
app.get('/formularioBeneficiario', (req, res)=>{
    res.render('formularioBeneficiario')
})
app.get('/pedidos', (req, res)=>{
    res.render('pedidos')
})
app.get('/editarPedido', (req, res)=>{
    res.render('editarPedido')
})
app.get('/detallePedido', (req, res)=>{
    res.render('detallePedido')
})


app.get('/ventas', (req, res)=>{
    res.render('ventas')
})
app.get('/devoluciones', (req, res)=>{
    res.render('devoluciones')
})

// JOHANY

app.get('/GestionVentas', (req, res)=>{
    res.render('GestionVentas')
})

app.get('/GestionDevoluciones', (req, res)=>{
    res.render('GestionDevoluciones')
})

// FIN JOHANY


//Fin Ventas


// Fin rutinas

app.get('/plantilla', (req, res)=>{
    res.render('plantilla')
})

app.get('*', (req, res)=>{
    res.render('404')
})

app.listen(port, () => {
    console.log(`Escuchado por el puerto ${port}`)
})
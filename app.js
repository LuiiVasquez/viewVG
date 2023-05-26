// este archivo es necesario para crear el servidor
// constante para express
const express = require ('express');

// objeto del servidor de la aplicacion
const app = express();

//Especificar archivos de threejs como archivos estáticos
app.use(express.static(__dirname + '/public'))

// agregar la ruta del html
// agregar función, requerimiento y respuesta
app.get('/', (req, res)=>{
    // usar respuesta para enviar un archivo
    res.sendFile(__dirname + '/public/index.html');
})

const PORT = process.env.PORT || 4000;

// definir un puerto para el servidor
// función para avisar que el servidor está corriendo
app.listen(PORT, ()=>{
    console.log('server running on port: ', PORT);
})

// reiniciar el servidor cada vez que se hagan cambios

// Importa las librerías necesarias
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const alojamientosRoutes = require('./routes/alojamientos');
const usuariosRoutes = require('./routes/usuarios');

// Inicializa tu aplicación Express
const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Configuración básica del puerto
const PORT = process.env.PORT || 5000;

// Conectar a MongoDB
mongoose.connect(process.env.MONGODB_URI, {})
.then(() => console.log("Conectado a MongoDB"))
.catch(err => console.error("No se pudo conectar a MongoDB", err));

// Definición de una ruta de prueba
app.get('/', (req, res) => {
    res.send('Hola Mundo!');
});

//rutas 

//alojamiento
app.use('/api/alojamientos', alojamientosRoutes);

//usuario
app.use('/api/usuarios', usuariosRoutes);



// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

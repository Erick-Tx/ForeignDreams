const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const alojamientosRoutes = require('./routes/alojamientos');
const usuariosRoutes = require('./routes/usuarios');
const propietariosRoutes = require('./routes/propietarios');

const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Conectar a MongoDB
mongoose.connect(process.env.MONGODB_URI, {})
    .then(() => console.log("Conectado a MongoDB"))
    .catch(err => console.error("No se pudo conectar a MongoDB", err));

// Definición de una ruta de prueba
app.get('/', (req, res) => {
    res.send('Hola Mundo!');
});

// Rutas
app.use('/api/alojamientos', alojamientosRoutes);
app.use('/api/usuarios', usuariosRoutes);
app.use('/api/propietarios', propietariosRoutes);

module.exports = app;
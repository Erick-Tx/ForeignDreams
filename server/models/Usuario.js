const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    edad: { type: String, required: true },
    docIdentidad: { type: Number, required: true },
    correo: { type: String, required: true, unique: true, match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Por favor, ingresa un correo válido']},
    contrasena: { type: String, required: true}
    // Aquí se agregan más campos según la necesidad 
}, { timestamps: true });

module.exports = mongoose.model('Usuario', usuarioSchema);
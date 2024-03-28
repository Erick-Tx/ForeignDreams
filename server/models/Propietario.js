const mongoose = require('mongoose');

const propietarioSchema = new mongoose.Schema({
    nombrePropiedad: { type: String, required: true, unique: true},
    celular: { type: String, required: true },
    numPropiedades: { type: Number, required: true },
    docIdentidad: { type: Number, required: true, unique:true },
    correo: { type: String, required: true, unique: true, match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Por favor, ingresa un correo válido']},
    contrasena: { type: String, required: true},
    
    // Aquí se agregan más campos según la necesidad 
}, { timestamps: true });

module.exports = mongoose.model('Propietario', propietarioSchema);
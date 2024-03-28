const mongoose = require('mongoose');

const alojamientoSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    propietario: { type: String, required: true },
    direccion: { type: String, required: true },
    descripcion: String,
    garantia: { type: Boolean, required: true},
    cantidadPersona: { type: Number, required: true },
    amoblado: { type: Boolean, required: true},
    aguaCaliente: { type: Boolean, required: true, default: true },
    parqueadero: { type: Boolean, required: true},
    areaVerde: { type: Boolean, required: true},
    petFriendly: { type: Boolean, required: true},
    internet: { type: Boolean, required: true, default: true },
    precio: { type: Number, required: true },
    fotos: [String], // Array de URLs de imágenes
    disponibilidad: { type: Boolean, required: true, default: true },
    propi: {type: mongoose.Schema.Types.ObjectId, ref: 'Propietario'}
    
    // Aquí se agregan más campos según la necesidad 
}, { timestamps: true });

module.exports = mongoose.model('Alojamiento', alojamientoSchema);
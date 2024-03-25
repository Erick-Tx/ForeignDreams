const express = require('express');
const router = express.Router();
const Alojamiento = require('../models/Alojamiento');

// Crear un nuevo alojamiento
router.post('/', async (req, res) => {
    try {
        const alojamiento = new Alojamiento(req.body);
        const savedAlojamiento = await alojamiento.save();
        res.status(201).json(savedAlojamiento);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Leer todos los alojamientos
router.get('/', async (req, res) => {
    try {
        const alojamientos = await Alojamiento.find();
        res.json(alojamientos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Leer un alojamiento por ID
router.get('/:id', async (req, res) => {
    try {
        const alojamiento = await Alojamiento.findById(req.params.id);
        if (!alojamiento) {
            return res.status(404).json({ message: "Alojamiento no encontrado" });
        }
        res.json(alojamiento);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Actualizar un alojamiento
router.patch('/:id', async (req, res) => {
    try {
        const alojamiento = await Alojamiento.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(alojamiento);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Borrar un alojamiento
router.delete('/:id', async (req, res) => {
    try {
        const alojamiento = await Alojamiento.findByIdAndDelete(req.params.id);
        if (!alojamiento) {
            return res.status(404).json({ message: "Alojamiento no encontrado" });
        }
        res.json({ message: "Alojamiento eliminado" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;

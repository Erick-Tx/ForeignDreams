const express = require('express');
const router = express.Router();
const Propietario = require('../models/Propietario');

// Crear un nuevo Propietario
router.post('/', async (req, res) => {
    try {
        const propietario = new Propietario(req.body);
        const savedPropietario = await propietario.save();
        res.status(201).json(savedPropietario);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Leer todos los Propietarios
router.get('/', async (req, res) => {
    try {
        const propietarios = await Propietario.find();
        res.json(propietarios);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Leer un Propietario por ID
router.get('/:id', async (req, res) => {
    try {
        const propietario = await Propietario.findById(req.params.id);
        if (!propietario) {
            return res.status(404).json({ message: "Propietario no encontrado" });
        }
        res.json(propietario);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Actualizar un Propietario
router.patch('/:id', async (req, res) => {
    try {
        const propietario = await Propietario.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(propietario);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Borrar un Propietario
router.delete('/:id', async (req, res) => {
    try {
        const propietario = await Propietario.findByIdAndDelete(req.params.id);
        if (!propietario) {
            return res.status(404).json({ message: "Propietario no encontrado" });
        }
        res.json({ message: "Propietario eliminado" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;

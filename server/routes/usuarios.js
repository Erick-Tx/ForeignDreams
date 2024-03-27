const express = require('express');
const router = express.Router();
const Usuario = require('../models/Usuario');

// Crear un nuevo Usuario
router.post('/', async (req, res) => {
    try {
        const usuario = new Usuario(req.body);
        const savedUsuario = await usuario.save();
        res.status(201).json(savedUsuario);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Leer todos los Usuarios
router.get('/', async (req, res) => {
    try {
        const usuarios = await Usuario.find();
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Leer un Usuario por ID
router.get('/:id', async (req, res) => {
    try {
        const usuario = await Usuario.findById(req.params.id);
        if (!usuario) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }
        res.json(usuario);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Actualizar un Usuario
router.patch('/:id', async (req, res) => {
    try {
        const usuario = await Usuario.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(usuario);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Borrar un Usuario
router.delete('/:id', async (req, res) => {
    try {
        const usuario = await Usuario.findByIdAndDelete(req.params.id);
        if (!usuario) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }
        res.json({ message: "Usuario eliminado" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;

const express = require('express');
const router = express.Router();
const horario = require('../controllers/horario.controller.js');

// Crear un nuevo horario
router.post('/horario/create', horario.create);

// Obtener todos los horarios
router.get('/horario/all', horario.retrieveAll);

// Obtener un horario por ID
router.get('/horario/:id', horario.getById);

// Actualizar un horario por ID
router.put('/horario/:id', horario.updateById);

// Eliminar un horario por ID
router.delete('/horario/:id', horario.deleteById);

module.exports = router;

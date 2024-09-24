const express = require('express');
const router = express.Router();
const control_ingreso = require('../controllers/control_ingreso.controller.js');

// Crear un nuevo registro de ingreso
router.post('/controlingreso/create', control_ingreso.create);

// Obtener todos los registros de ingreso
router.get('/controlingreso/all', control_ingreso.retrieveAll);

// Obtener un registro de ingreso por ID
router.get('/controlingreso/:id', control_ingreso.getById);

// Actualizar un registro de ingreso por ID
router.put('/controlingreso/:id', control_ingreso.updateById);

// Eliminar un registro de ingreso por ID
router.delete('/controlingreso/:id', control_ingreso.deleteById);

module.exports = router;
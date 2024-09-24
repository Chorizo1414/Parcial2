const express = require('express');
const router = express.Router();
const catedratico = require('../controllers/catedratico.controller.js');

// Crear un nuevo catedrático
router.post('/catedratico/create', catedratico.create);

// Obtener todos los catedráticos
router.get('/catedratico/all', catedratico.retrieveAll);

// Obtener un catedrático por ID
router.get('/catedratico/:id', catedratico.getById);

// Actualizar un catedrático por ID
router.put('/catedratico/:id', catedratico.updateById);

// Eliminar un catedrático por ID
router.delete('/catedratico/:id', catedratico.deleteById);

module.exports = router;
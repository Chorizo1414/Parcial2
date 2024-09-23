const express = require('express');
const router = express.Router();
const controller2 = require('../controllers/controller2.controller.js');

// Crear una nueva entrada
router.post('/model2/create', controller2.create);

// Obtener todas las entradas
router.get('/model2/all', controller2.retrieveAll);

// Obtener una entrada por ID
router.get('/model2/:id', controller2.getById);

// Filtrar por un campo específico
router.get('/model2/filter', controller2.filterByField);

// Paginación
router.get('/model2/pagination', controller2.pagination);

// Paginación, filtrado y ordenamiento
router.get('/model2/pagingfilteringsorting', controller2.pagingFilteringSorting);

// Actualizar una entrada por ID
router.put('/model2/:id', controller2.updateById);

// Eliminar una entrada por ID
router.delete('/model2/:id', controller2.deleteById);

module.exports = router;
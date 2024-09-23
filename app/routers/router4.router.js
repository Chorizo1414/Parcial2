const express = require('express');
const router = express.Router();
const controller4 = require('../controllers/controller4.controller.js');

// Crear una nueva entrada
router.post('/model4/create', controller4.create);

// Obtener todas las entradas
router.get('/model4/all', controller4.retrieveAll);

// Obtener una entrada por ID
router.get('/model4/:id', controller4.getById);

// Filtrar por un campo específico
router.get('/model4/filter', controller4.filterByField);

// Paginación
router.get('/model4/pagination', controller4.pagination);

// Paginación, filtrado y ordenamiento
router.get('/model4/pagingfilteringsorting', controller4.pagingFilteringSorting);

// Actualizar una entrada por ID
router.put('/model4/:id', controller4.updateById);

// Eliminar una entrada por ID
router.delete('/model4/:id', controller4.deleteById);

module.exports = router;

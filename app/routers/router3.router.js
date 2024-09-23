const express = require('express');
const router = express.Router();
const controller3 = require('../controllers/controller3.js');

// Crear una nueva entrada
router.post('/model3/create', controller3.create);

// Obtener todas las entradas
router.get('/model3/all', controller3.retrieveAll);

// Obtener una entrada por ID
router.get('/model3/:id', controller3.getById);

// Filtrar por un campo específico
router.get('/model3/filter', controller3.filterByField);

// Paginación
router.get('/model3/pagination', controller3.pagination);

// Paginación, filtrado y ordenamiento
router.get('/model3/pagingfilteringsorting', controller3.pagingFilteringSorting);

// Actualizar una entrada por ID
router.put('/model3/:id', controller3.updateById);

// Eliminar una entrada por ID
router.delete('/model3/:id', controller3.deleteById);

module.exports = router;
const express = require('express');
const router = express.Router();
const controller6 = require('../controllers/controller6.controller.js');

// Crear una nueva entrada
router.post('/model6/create', controller6.create);

// Obtener todas las entradas
router.get('/model6/all', controller6.retrieveAll);

// Obtener una entrada por ID
router.get('/model6/:id', controller6.getById);

// Filtrar por un campo específico
router.get('/model6/filter', controller6.filterByField);

// Paginación
router.get('/model6/pagination', controller6.pagination);

// Paginación, filtrado y ordenamiento
router.get('/model6/pagingfilteringsorting', controller6.pagingFilteringSorting);

// Actualizar una entrada por ID
router.put('/model6/:id', controller6.updateById);

// Eliminar una entrada por ID
router.delete('/model6/:id', controller6.deleteById);

module.exports = router;

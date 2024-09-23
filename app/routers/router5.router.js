const express = require('express');
const router = express.Router();
const controller5 = require('../controllers/controller5.js');

// Crear una nueva entrada
router.post('/model5/create', controller5.create);

// Obtener todas las entradas
router.get('/model5/all', controller5.retrieveAll);

// Obtener una entrada por ID
router.get('/model5/:id', controller5.getById);

// Filtrar por un campo específico
router.get('/model5/filter', controller5.filterByField);

// Paginación
router.get('/model5/pagination', controller5.pagination);

// Paginación, filtrado y ordenamiento
router.get('/model5/pagingfilteringsorting', controller5.pagingFilteringSorting);

// Actualizar una entrada por ID
router.put('/model5/:id', controller5.updateById);

// Eliminar una entrada por ID
router.delete('/model5/:id', controller5.deleteById);

module.exports = router;
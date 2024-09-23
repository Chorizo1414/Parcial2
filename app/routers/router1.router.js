const express = require('express');
const router = express.Router();
const controller1 = require('../controllers/controller1.js');

// Crear una nueva entrada
router.post('/model1/create', controller1.create);

// Obtener todas las entradas
router.get('/model1/all', controller1.retrieveAll);

// Obtener una entrada por ID
router.get('/model1/:id', controller1.getById);

// Filtrar por un campo específico
router.get('/model1/filter', controller1.filterByField);

// Paginación
router.get('/model1/pagination', controller1.pagination);

// Paginación, filtrado y ordenamiento
router.get('/model1/pagingfilteringsorting', controller1.pagingFilteringSorting);

// Actualizar una entrada por ID
router.put('/model1/:id', controller1.updateById);

// Eliminar una entrada por ID
router.delete('/model1/:id', controller1.deleteById);

module.exports = router;
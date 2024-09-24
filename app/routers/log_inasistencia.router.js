const express = require('express');
const router = express.Router();
const log_inasistencia = require('../controllers/log_inasistencia.controller.js');

// Obtener todos los logs de inasistencias
router.get('/loginasistencia/all', log_inasistencia.retrieveAll);

// Obtener un log de inasistencia por ID
router.get('/loginasistencia/:id', log_inasistencia.getById);

module.exports = router;

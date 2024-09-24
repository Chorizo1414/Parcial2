const db = require('../config/db.config.js');
const LogInasistencia = db.LogInasistencia;

// Obtener todos los logs de inasistencias
exports.retrieveAll = (req, res) => {
  LogInasistencia.findAll()
    .then(logs => {
      res.status(200).json({
        message: "Logs de inasistencias recuperados exitosamente",
        logs: logs
      });
    })
    .catch(error => {
      res.status(500).json({
        message: "Error al recuperar los logs de inasistencias",
        error: error.message
      });
    });
};

// Obtener un log de inasistencia por ID
exports.getById = (req, res) => {
  let id = req.params.id;

  LogInasistencia.findByPk(id)
    .then(log => {
      if (!log) {
        res.status(404).json({
          message: "Log de inasistencia no encontrado",
          log: null
        });
      } else {
        res.status(200).json({
          message: "Log de inasistencia encontrado",
          log: log
        });
      }
    })
    .catch(error => {
      res.status(500).json({
        message: "Error al recuperar el log de inasistencia",
        error: error.message
      });
    });
};
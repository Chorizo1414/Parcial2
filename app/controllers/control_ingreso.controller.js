const db = require('../config/db.config.js');
const ControlIngreso = db.ControlIngreso;
const LogInasistencia = db.LogInasistencia;

// Crear un nuevo registro de ingreso
exports.create = (req, res) => {
  let controlIngreso = {
    id_Catedratico: req.body.id_Catedratico,
    FechaHoraIngreso: req.body.FechaHoraIngreso,
    FechaHoraSalida: req.body.FechaHoraSalida,
    Estatus: req.body.Estatus
  };

  ControlIngreso.create(controlIngreso)
    .then(data => {
      if (data.Estatus === 0) { // Si es inasistencia
        ControlIngreso.count({ where: { id_Catedratico: data.id_Catedratico, Estatus: 0 } })
          .then(count => {
            if (count >= 3) {
              LogInasistencia.create({ id_Catedratico: data.id_Catedratico })
                .then(() => {
                  res.status(200).json({
                    message: "Inasistencia registrada y log creado por 3 inasistencias",
                    controlIngreso: data
                  });
                });
            } else {
              res.status(200).json({
                message: "Inasistencia registrada",
                controlIngreso: data
              });
            }
          });
      } else {
        res.status(200).json({
          message: "Ingreso registrado exitosamente",
          controlIngreso: data
        });
      }
    })
    .catch(error => {
      res.status(500).json({
        message: "Error al registrar el ingreso",
        error: error.message
      });
    });
};

// Obtener todos los registros de ingreso
exports.retrieveAll = (req, res) => {
  ControlIngreso.findAll()
    .then(ingresos => {
      res.status(200).json({
        message: "Registros de ingreso recuperados exitosamente",
        ingresos: ingresos
      });
    })
    .catch(error => {
      res.status(500).json({
        message: "Error al recuperar los registros de ingreso",
        error: error.message
      });
    });
};

// Obtener un registro de ingreso por ID
exports.getById = (req, res) => {
  let id = req.params.id;

  ControlIngreso.findByPk(id)
    .then(ingreso => {
      if (!ingreso) {
        res.status(404).json({
          message: "Registro de ingreso no encontrado",
          ingreso: null
        });
      } else {
        res.status(200).json({
          message: "Registro de ingreso encontrado",
          ingreso: ingreso
        });
      }
    })
    .catch(error => {
      res.status(500).json({
        message: "Error al recuperar el registro de ingreso",
        error: error.message
      });
    });
};

// Actualizar un registro de ingreso por ID
exports.updateById = (req, res) => {
  let id = req.params.id;

  ControlIngreso.update(req.body, { where: { id_ingreso: id } })
    .then(num => {
      if (num == 1) {
        res.status(200).json({
          message: "Registro de ingreso actualizado exitosamente"
        });
      } else {
        res.status(404).json({
          message: `No se pudo actualizar el registro de ingreso con id=${id}. Puede que no se haya encontrado o que req.body esté vacío.`
        });
      }
    })
    .catch(error => {
      res.status(500).json({
        message: "Error al actualizar el registro de ingreso",
        error: error.message
      });
    });
};

// Eliminar un registro de ingreso por ID
exports.deleteById = (req, res) => {
  let id = req.params.id;

  ControlIngreso.destroy({ where: { id_ingreso: id } })
    .then(num => {
      if (num == 1) {
        res.status(200).json({
          message: "Registro de ingreso eliminado exitosamente"
        });
      } else {
        res.status(404).json({
          message: `No se pudo eliminar el registro de ingreso con id=${id}. Puede que no se haya encontrado.`
        });
      }
    })
    .catch(error => {
      res.status(500).json({
        message: "Error al eliminar el registro de ingreso",
        error: error.message
      });
    });
};

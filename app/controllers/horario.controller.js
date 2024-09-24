const db = require('../config/db.config.js');
const Horario = db.Horario;

// Crear nuevo horario
exports.create = (req, res) => {
  let horario = {
    id_catedratico: req.body.id_catedratico,
    curso: req.body.curso,
    hora_inicio: req.body.hora_inicio,
    hora_fin: req.body.hora_fin
  };

  Horario.create(horario)
    .then(data => {
      res.status(200).json({
        message: "Horario creado exitosamente",
        horario: data
      });
    })
    .catch(error => {
      res.status(500).json({
        message: "Error al crear el horario",
        error: error.message
      });
    });
};

// Obtener todos los horarios
exports.retrieveAll = (req, res) => {
  Horario.findAll()
    .then(horarios => {
      res.status(200).json({
        message: "Horarios recuperados exitosamente",
        horarios: horarios
      });
    })
    .catch(error => {
      res.status(500).json({
        message: "Error al recuperar horarios",
        error: error.message
      });
    });
};

// Obtener un horario por ID
exports.getById = (req, res) => {
  let id = req.params.id;

  Horario.findByPk(id)
    .then(horario => {
      if (!horario) {
        res.status(404).json({
          message: "Horario no encontrado",
          horario: null
        });
      } else {
        res.status(200).json({
          message: "Horario encontrado",
          horario: horario
        });
      }
    })
    .catch(error => {
      res.status(500).json({
        message: "Error al recuperar el horario",
        error: error.message
      });
    });
};

// Actualizar un horario por ID
exports.updateById = (req, res) => {
  let id = req.params.id;

  Horario.update(req.body, { where: { id_horario: id } })
    .then(num => {
      if (num == 1) {
        res.status(200).json({
          message: "Horario actualizado exitosamente"
        });
      } else {
        res.status(404).json({
          message: `No se pudo actualizar el horario con id=${id}. Puede que no se haya encontrado o que req.body esté vacío.`
        });
      }
    })
    .catch(error => {
      res.status(500).json({
        message: "Error al actualizar el horario",
        error: error.message
      });
    });
};

// Eliminar por ID
exports.deleteById = (req, res) => {
  let id = req.params.id;

  Horario.destroy({ where: { id_horario: id } })
    .then(num => {
      if (num == 1) {
        res.status(200).json({
          message: "Horario eliminado exitosamente"
        });
      } else {
        res.status(404).json({
          message: `No se pudo eliminar el horario con id=${id}. Puede que no se haya encontrado.`
        });
      }
    })
    .catch(error => {
      res.status(500).json({
        message: "Error al eliminar el horario",
        error: error.message
      });
    });
};
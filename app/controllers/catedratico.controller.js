const db = require('../config/db.config.js');
const Catedratico = db.Catedratico;

// Crear
exports.create = (req, res) => {
  let catedratico = {
    NombreCompleto: req.body.NombreCompleto,
    FechaContratacion: req.body.FechaContratacion,
    FechaNacimiento: req.body.FechaNacimiento,
    Genero: req.body.Genero,
    Titulo: req.body.Titulo,
    Salario: req.body.Salario
  };

  Catedratico.create(catedratico)
    .then(data => {
      res.status(200).json({
        message: "Catedrático creado exitosamente",
        catedratico: data
      });
    })
    .catch(error => {
      res.status(500).json({
        message: "Error al crear el catedrático",
        error: error.message
      });
    });
};

// Consultar a todos los catedráticos
exports.retrieveAll = (req, res) => {
  Catedratico.findAll()
    .then(catedraticos => {
      res.status(200).json({
        message: "Catedráticos recuperados exitosamente",
        catedraticos: catedraticos
      });
    })
    .catch(error => {
      res.status(500).json({
        message: "Error al recuperar catedráticos",
        error: error.message
      });
    });
};

// Consulta por ID
exports.getById = (req, res) => {
  let id = req.params.id;

  Catedratico.findByPk(id)
    .then(catedratico => {
      if (!catedratico) {
        res.status(404).json({
          message: "Catedrático no encontrado",
          catedratico: null
        });
      } else {
        res.status(200).json({
          message: "Catedrático encontrado",
          catedratico: catedratico
        });
      }
    })
    .catch(error => {
      res.status(500).json({
        message: "Error al recuperar el catedrático",
        error: error.message
      });
    });
};

// Actualizar por ID
exports.updateById = (req, res) => {
  let id = req.params.id;

  Catedratico.update(req.body, { where: { IdCatedratico: id } })
    .then(num => {
      if (num == 1) {
        res.status(200).json({
          message: "Catedrático actualizado exitosamente"
        });
      } else {
        res.status(404).json({
          message: `No se pudo actualizar el catedrático con id=${id}. Puede que no se haya encontrado o que req.body esté vacío.`
        });
      }
    })
    .catch(error => {
      res.status(500).json({
        message: "Error al actualizar el catedrático",
        error: error.message
      });
    });
};

// Eliminar por ID
exports.deleteById = (req, res) => {
  let id = req.params.id;

  Catedratico.destroy({ where: { IdCatedratico: id } })
    .then(num => {
      if (num == 1) {
        res.status(200).json({
          message: "Catedrático eliminado exitosamente"
        });
      } else {
        res.status(404).json({
          message: `No se pudo eliminar el catedrático con id=${id}. Puede que no se haya encontrado.`
        });
      }
    })
    .catch(error => {
      res.status(500).json({
        message: "Error al eliminar el catedrático",
        error: error.message
      });
    });
};
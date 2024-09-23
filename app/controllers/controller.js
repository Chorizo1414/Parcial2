

const db = require('../config/db.config.js');
const Cancion = db.Cancion;

exports.create = (req, res) => {
    let cancion = {};

    try{
        // Building Cancion object from upoading request's body
        cancion.nombre = req.body.nombre;
        cancion.descripcion = req.body.descripcion;
        cancion.artista = req.body.artista;
        cancion.duracion = req.body.duracion;
        cancion.formato = req.body.formato;
        cancion.album = req.body.album;
        cancion.año = req.body.año;
    
        // Save to MySQL database
        Cancion.create(cancion).then(result => {    
            // send uploading message to client
            res.status(200).json({
                message: "Cancion lanzada exitosamente con el id = " + result.id,
                cancion: result,
            });
        });
    }catch(error){
        res.status(500).json({
            message: "Fail!",
            error: error.message
        });
    }
}


exports.getCancionById = (req, res) => {
  // find all Cancion information from 
  let cancionId = req.params.id;
  Cancion.findByPk(cancionId)
      .then(cancion => {
          res.status(200).json({
              message: "Cancion encontrada con exito con el id = " + cancionId,
              cancions: cancion
          });
      })
      . catch(error => {
        // log on console
        console.log(error);

        res.status(500).json({
            message: "Error!",
            error: error
        });
      });
}



exports.filteringByTime = (req, res) => {
  let duracion = req.query.duracion;

    Cancion.findAll({
                      attributes: ['id', 'nombre', 'descripcion', 'duracion', 'artista', 'duracion', 'formato', 'album', 'año', 'copyrightby'],
                      where: {duracion: duracion}
                    })
          .then(results => {
            res.status(200).json({
                message: "Se encontraron canciones relacionadas con la duracion = " + duracion,
                cancions: results,
            });
          })
          . catch(error => {
              console.log(error);
              res.status(500).json({
                message: "Error!",
                error: error
              });
            });
}


exports.filteringByYear = (req, res) => {
  let año = req.query.año;

    Cancion.findAll({
                      attributes: ['id', 'nombre', 'descripcion', 'duracion', 'artista', 'duracion', 'formato', 'album', 'año', 'copyrightby'],
                      where: {año: año}
                    })
          .then(results => {
            res.status(200).json({
                message: "Se encontraron canciones relacionadas con el año = " + año,
                cancions: results,
            });
          })
          . catch(error => {
              console.log(error);
              res.status(500).json({
                message: "Error!",
                error: error
              });
            });
}

exports.filteringByArtist = (req, res) => {
  let artista = req.query.artista;

    Cancion.findAll({
                      attributes: ['id', 'nombre', 'descripcion', 'duracion', 'artista', 'duracion', 'formato', 'album', 'año', 'copyrightby'],
                      where: {artista: artista}
                    })
          .then(results => {
            res.status(200).json({
                message: "Se encontraron canciones relacionadas con el artista = " + artista,
                cancions: results,
            });
          })
          . catch(error => {
              console.log(error);
              res.status(500).json({
                message: "Error!",
                error: error
              });
            });
}


exports.updateById = async (req, res) => {
    try{
        let cancionId = req.params.id;
        let cancion = await Cancion.findByPk(cancionId);
    
        if(!cancion){
            // return a response to client
            res.status(404).json({
                message: "No se a encontrado la cancion para modificar con el id = " + cancionId,
                cancion: "",
                error: "404"
            });
        } else {    
            // update new change to database
            let updatedObject = {
                nombre: req.body.nombre,
                descripcion: req.body.descripcion,
                artista: req.body.artista,
                duracion: req.body.duracion
            }
            let result = await Cancion.update(updatedObject, {returning: true, where: {id: cancionId}});
            
            // return the response to client
            if(!result) {
                res.status(500).json({
                    message: "Error -> No se ha podido modificar la cancion con el id = " + req.params.id,
                    error: "NO se pudo modificar",
                });
            }

            res.status(200).json({
                message: "Cancion modificado correctamente con el id = " + cancionId,
                cancion: updatedObject,
            });
        }
    } catch(error){
        res.status(500).json({
            message: "Error -> No se pudo modificar la cancion con el id = " + req.params.id,
            error: error.message
        });
    }
}



exports.deleteById = async (req, res) => {
    try{
        let cancionId = req.params.id;
        let cancion = await Cancion.findByPk(cancionId);

        if(!cancion){
            res.status(404).json({
                message: "No existe la cancion con el id = " + cancionId,
                error: "404",
            });
        } else {
            await cancion.destroy();
            res.status(200).json({
                message: "La cancion se ha eliminado correctamente id = " + cancionId,
                cancion: cancion,
            });
        }
    } catch(error) {
        res.status(500).json({
            message: "Error -> No se puede borrar la cancion con el id = " + req.params.id,
            error: error.message,
        });
    }
}

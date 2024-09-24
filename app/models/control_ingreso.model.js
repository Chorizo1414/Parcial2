module.exports = (sequelize, Sequelize) => {
    const Control_ingreso = sequelize.define('control_ingreso', {
      id_ingreso: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      id_catedratico: {
        type: Sequelize.INTEGER
      },
      fecha_hora_ingreso: {
        type: Sequelize.DATE
      },
      fecha_hora_salida: {
        type: Sequelize.DATE
      },
      estatus: {
        type: Sequelize.BOOLEAN //1 asistencia, 0 falta
      }
    });
  
    return Control_ingreso;
  };
  
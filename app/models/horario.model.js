module.exports = (sequelize, Sequelize) => {
    const Horario = sequelize.define('horario', {
      id_horario: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      id_catedratico: {
        type: Sequelize.INTEGER
      },
      curso: {
        type: Sequelize.STRING
      },
      hora_inicio: {
        type: Sequelize.TIME
      },
      hora_fin: {
        type: Sequelize.TIME
      }
    });
  
    return Horario;
  };
  
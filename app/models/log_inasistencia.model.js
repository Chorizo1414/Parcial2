module.exports = (sequelize, Sequelize) => {
  const LogInasistencia = sequelize.define('loginasistencia', {
    id_log: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    id_Catedratico: {
      type: Sequelize.INTEGER
    },
    FechaRegistro: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    },
    Motivo: {
      type: Sequelize.STRING,
      defaultValue: "3 Inasistencias"
    }
  });

  return LogInasistencia;
};
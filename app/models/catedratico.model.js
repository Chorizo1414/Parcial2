module.exports = (sequelize, Sequelize) => {
    const Catedratico = sequelize.define('catedratico', {
      IdCatedratico: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      Nombre_Completo: {
        type: Sequelize.STRING
      },
      Fecha_Contratacion: {
        type: Sequelize.DATE
      },
      Fecha_Nacimiento: {
        type: Sequelize.DATE
      },
      Genero: {
        type: Sequelize.STRING
      },
      Titulo: {
        type: Sequelize.STRING
      },
      Salario: {
        type: Sequelize.FLOAT
      }
    });
  
    return Catedratico;
  };
  
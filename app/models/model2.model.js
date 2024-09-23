module.exports = (sequelize, Sequelize) => {
    const Model2 = sequelize.define('model2', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      field1: {
        type: Sequelize.STRING
      },
      field2: {
        type: Sequelize.STRING
      },
      field3: {
        type: Sequelize.FLOAT
      },
      field4: {
        type: Sequelize.DATE
      }
    });
  
    return Model2;
  };
  
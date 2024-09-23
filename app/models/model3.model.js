module.exports = (sequelize, Sequelize) => {
    const Model3 = sequelize.define('model3', {
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
        type: Sequelize.TEXT
      },
      field4: {
        type: Sequelize.STRING
      }
    });
  
    return Model3;
  };
  
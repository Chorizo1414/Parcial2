module.exports = (sequelize, Sequelize) => {
    const Model4 = sequelize.define('model4', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      field1: {
        type: Sequelize.STRING
      },
      field2: {
        type: Sequelize.BOOLEAN
      },
      field3: {
        type: Sequelize.FLOAT
      },
      field4: {
        type: Sequelize.INTEGER
      }
    });
  
    return Model4;
  };
  
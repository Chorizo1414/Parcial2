module.exports = (sequelize, Sequelize) => {
    const Model6 = sequelize.define('model6', {
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
        type: Sequelize.STRING
      },
      field4: {
        type: Sequelize.DATE
      }
    });
  
    return Model6;
  };
  
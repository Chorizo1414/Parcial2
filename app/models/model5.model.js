module.exports = (sequelize, Sequelize) => {
    const Model5 = sequelize.define('model5', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      field1: {
        type: Sequelize.STRING
      },
      field2: {
        type: Sequelize.DATE
      },
      field3: {
        type: Sequelize.STRING
      },
      field4: {
        type: Sequelize.TEXT
      }
    });
  
    return Model5;
  };
  
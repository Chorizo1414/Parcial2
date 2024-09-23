module.exports = (sequelize, Sequelize) => {
    const Model1 = sequelize.define('model1', {
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
        type: Sequelize.INTEGER
      },
      field4: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Model1;
  };
  
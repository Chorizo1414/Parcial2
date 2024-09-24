const env = require('./env.js');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },
  operatorsAliases: false,

  pool: {
    max: env.pool.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle,
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;


db.Catedratico = require('../models/catedratico.model.js')(sequelize, Sequelize);
db.Horario = require('../models/horario.model.js')(sequelize, Sequelize);
db.ControlIngreso = require('../models/control_ingreso.model.js')(sequelize, Sequelize);
db.LogInasistencia = require('../models/log_inasistencia.model.js')(sequelize, Sequelize);

module.exports = db;

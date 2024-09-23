

const env = {
  database: 'database_umg_johann',
  username: 'database_umg_johann_user',
  password: 'R0fTeIhiwXIz6zi0AHK0nz5faOj8f0jj',
  host: 'dpg-cqc7louehbks738amlg0-a.oregon-postgres.render.com',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

module.exports = env;
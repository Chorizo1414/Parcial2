const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const cors = require('cors');

const db = require('./app/config/db.config.js');

// Sincronización de base de datos sin eliminar tablas existentes
db.sequelize.sync({ force: false }).then(() => {
  console.log('Database synchronized without dropping existing tables.');
});

// Configuraciones de CORS
const corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

// Parseo de solicitudes de tipo application/json
app.use(bodyParser.json());

// Importación de rutas con nombres genéricos
let router1 = require('./app/routers/router1.router.js');
let router2 = require('./app/routers/router2.router.js');
let router3 = require('./app/routers/router3.router.js');
let router4 = require('./app/routers/router4.router.js');
let router5 = require('./app/routers/router5.router.js');
let router6 = require('./app/routers/router6.router.js');

// Uso de rutas con nombres genéricos
app.use('/', router1);
app.use('/', router2);  // Rutas para modelo1
app.use('/', router3);  // Rutas para modelo2
app.use('/', router4);  // Rutas para modelo3
app.use('/', router5);  // Rutas para modelo4
app.use('/', router6);  // Rutas para modelo5

// Ruta base
app.get("/", (req, res) => {
  res.json({ message: "Bienvenido Estudiantes de UMG" });
});

// Creación del servidor
const server = app.listen(8000, function () {
  let host = server.address().address;
  let port = server.address().port;
  console.log("App listening at http://%s:%s", host, port);
});

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

// Importación de rutas con nombres correctos según tu estructura de archivos
let catedratico = require('./app/routers/catedratico.router.js');
let controlIngreso = require('./app/routers/control_ingreso.router.js');
let horario = require('./app/routers/horario.router.js');
let logInasistencia = require('./app/routers/log_inasistencia.router.js');

// Uso de rutas
app.use('/', catedratico);
app.use('/', controlIngreso);  
app.use('/', horario);  
app.use('/', logInasistencia);  

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

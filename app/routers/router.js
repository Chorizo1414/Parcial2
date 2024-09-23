
let express = require('express');
let router = express.Router();
 
const canciones = require('../controllers/controller.js');

router.post('/api/canciones/create', canciones.create);
router.get('/api/canciones/onebyid/:id', canciones.getCancionById);
router.get('/api/canciones/filteringbytime', canciones.filteringByTime);
router.get('/api/canciones/filteringbyyear', canciones.filteringByYear);
router.put('/api/canciones/update/:id', canciones.updateById);
router.delete('/api/canciones/delete/:id', canciones.deleteById);

module.exports = router;
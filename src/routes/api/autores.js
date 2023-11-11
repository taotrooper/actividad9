const router = require('express').Router();

const AutoresController = require('../../controllers/autores.controller');
const { checkAutorId } = require('../../middlewares/autores.middleware');

// Rutas /api/autores
router.get('/', AutoresController.getAllAutores);
router.get('/:autorId', checkAutorId, AutoresController.getAutorById);
router.post('/', AutoresController.createAutor);

// Exports
module.exports = router;
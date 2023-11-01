const router = require('express').Router();

const AutoresController = require('../../controllers/autores.controller');

// Rutas /api/autores
router.get('/', AutoresController.getAllAutores);
router.get('/:autorId', AutoresController.getAutorById);
router.post('/', AutoresController.createAutor);

// Exports
module.exports = router;
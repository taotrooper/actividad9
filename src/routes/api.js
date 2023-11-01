const router = require('express').Router();

// Rutas de /api
router.use('/posts', require('./api/posts'));
router.use('/autores', require('./api/autores'));

// Exports
module.exports = router;
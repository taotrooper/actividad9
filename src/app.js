const express = require('express');
const cors = require('cors');

const app = express();

// Configuración de la app
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api', require('./routes/api'));

// Exports
module.exports = app;
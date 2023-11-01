const http = require('node:http');
const app = require('./src/app');

// Configuración del fichero de entorno .env
require('dotenv').config();

// Configuración de la base de datos
require('./src/config/db');

// Server
const server = http.createServer(app);

const PORT = process.env.PORT || 3000;
server.listen(PORT);

server.on('listening', () => console.log(`Servidor escuchando en el puerto ${PORT}`));
server.on('error', (error) => console.log(error));
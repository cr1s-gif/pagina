// swaggerConfig.js
const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Documentación de API',
      version: '1.0.0',
      description: 'API para manejar productos, carrito y usuarios',
    },
    servers: [
      {
        url: 'http://localhost:3000', // URL del servidor donde corre tu API
      },
    ],
  },
  apis: ['./index.js'], // Cambia './server.js' por el archivo donde defines las rutas
};

module.exports = swaggerJSDoc(options);

const swaggerUI = require('swagger-ui-express');
const swaggerjsDoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Library API',
            version: '1.0.0',
            description: 'A simple Express Library API',
            contact: {
                name: 'DucSine',
                email: 'duchoangvo97@gmail.com'
            }
        },
        servers: [{ url: `http://localhost:${process.env.PORT}` }]
    },
    apis: ['./swagger/paths/*.yaml', './swagger/components/*.yaml']
};

const specs = swaggerjsDoc(options);

const serve = swaggerUI.serve;
const swaggerSetup = swaggerUI.setup(specs);

module.exports = { serve, swaggerSetup };

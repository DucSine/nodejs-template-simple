const express = require('express')
const { helloWord } = require('../controllers/examples.controllers')

const { } = require('../controllers/examples.controllers')

const route = express.Router()

/**
 * @swagger
 * tags: 
 *  name: hello word
 *  description: the first API
 */

/**
 * @swagger
 * /api/examples/HelloWord:
 *  get:
 *      summary: return this Hello Word
 *      tags: [hello word]
 *      responses: 
 *          200:
 *              description: the first API
 *              content:
 *                  application/json:
 *                      schema: 
 *                          type: object
 *                          properties:
 *                              message: 
 *                                  type: string
 *                                  example: "Helloword"
 *  
 */
route.get('/HelloWord', helloWord)

module.exports = route
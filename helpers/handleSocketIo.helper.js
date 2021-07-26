const express = require('express')
const socketIo = require('socket.io')

const app = express()
const http = require('http')

const server = http.createServer(app);

const io = socketIo(server, {
    cors: {
        origin: `http://localhost:${process.env.PORT}`,
        methods: ['GET', 'POST', 'PATCH', 'DELETE'],
    },
});

io.on('connection', (socket) => {
    console.log('Has connection');

    socket.on('disconnect', () => {
        console.log('User has left');
    });
});

module.exports = { app, server, io }

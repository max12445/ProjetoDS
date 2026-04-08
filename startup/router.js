const express = require('express');

const gameRoutes = require('../src/routes/gameRoutes');
const friendRoutes = require('../src/routes/friendRoutes');

module.exports = function (app) {
    app.use(express.json());

    app.use('/games', gameRoutes);
    app.use('/friends', friendRoutes);
};
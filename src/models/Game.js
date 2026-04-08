const mongoose = require('mongoose');

const Game = mongoose.model('Game', {
    name: String,
    Genero: String,
    valor: Number
});

module.exports = Game;

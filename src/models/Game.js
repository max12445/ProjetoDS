const mongoose = require('mongoose');

const Game = mongoose.model('Game', {
    name: String,
    genero: String,
    valor: Number,
    friendId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Friend'
    }
});

module.exports = Game;

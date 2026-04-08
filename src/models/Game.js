const mongoose = require('mongoose');

const Game = mongoose.model('Game', {
    name: String,
    genero: String,
    valor: {
        type: Number,
        required: true,
        min: 0
    },
    friendId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Friend'
    },
    isActive: {
        type: Boolean,
        default: true
    }
});

module.exports = Game;

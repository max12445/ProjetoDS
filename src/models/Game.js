const mongoose = require('mongoose');

const Game = mongoose.model('Game', {
    name: {
        type: String,
        required: true
    },
    genero: {
        type: String,
        required: true
    },
    valor: {
        type: Number,
        required: true,
        min: [0, 'O valor não pode ser negativo']
    },
    friendId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Friend',
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    }
});

module.exports = Game;
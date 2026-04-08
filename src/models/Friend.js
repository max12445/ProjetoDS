const mongoose = require('mongoose');

const Friend = mongoose.model('Friend', {
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    }
});

module.exports = Friend;
const mongoose = require('mongoose');

const Friend = mongoose.model('Friend', {
    name: String,
    age: Number
});

module.exports = Friend;
const express = require('express');
const router = express.Router();
const FriendController = require('../controllers/FriendController');

router
    .get('/friends', FriendController.getAll)
    .post('/friends', FriendController.create)
    .get('/friends/:id', FriendController.getById)
    .put('/friends/:id', FriendController.update)
    .delete('/friends/:id', FriendController.delete)

module.exports = router;

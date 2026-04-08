const express = require('express');
const router = express.Router();
const FriendController = require('../controllers/FriendController');

router
.get('/', FriendController.getAll)
.post('/', FriendController.create)
.get('/:id', FriendController.getById)
.put('/:id', FriendController.update)
.delete('/:id', FriendController.delete)

module.exports = router;

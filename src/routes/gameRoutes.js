const express = require('express');
const router = express.Router();
const GameController = require('../controllers/GameController');

router
.get('/', GameController.getAll)
.post('/', GameController.create)
.get('/:id', GameController.getById)
.put('/:id', GameController.update)
.delete('/:id', GameController.delete)

module.exports = router;
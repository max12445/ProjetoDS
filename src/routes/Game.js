const express = require('express');
const router = express.Router();
const GameController = require('../controllers/GameController');

router
    .get('/people', GameController.getAll)
    .post('/people', GameController.create)
    .get('/people/:id', GameController.getById)
    .put('/people/:id', GameController.update)
    .delete('/people/:id', GameController.delete)

module.exports = router;

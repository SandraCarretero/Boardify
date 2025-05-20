const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const userController = require('../controllers/userController.js');

router.get('/', auth, userController.getUserGames);
router.post('/', auth, userController.addGameToUser);
router.delete('/:id', auth, userController.removeGameFromUser);

module.exports = router;

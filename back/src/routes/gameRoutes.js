const express = require('express');
const router = express.Router();
const gameController = require('../controllers/gameController');
const authenticate = require('../middlewares/auth');

router.get('/search', gameController.searchGames);
router.get('/:id', gameController.getGameDetails);
router.post('/sessions', authenticate, gameController.createSession);
router.get('/sessions/:userId', authenticate, gameController.getUserSessions);

module.exports = router;

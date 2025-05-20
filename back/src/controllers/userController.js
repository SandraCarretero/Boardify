const userService = require('../services/userService');

exports.addGameToUser = async (req, res) => {
  const { id, name } = req.body;
  const userId = req.userId;

  try {
    const result = await userService.addGameToUser(userId, { id, name });
    res.json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getUserGames = async (req, res) => {
  const userId = req.userId;

  try {
    const games = await userService.getUserGames(userId);
    res.json(games);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.removeGameFromUser = async (req, res) => {
  const gameId = req.params.id;
  const userId = req.userId;

  try {
    await userService.removeGameFromUser(userId, gameId);
    res.json({ message: 'Game removed' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.addFriend = async (req, res) => {
  try {
    const { friendId } = req.body;
    await userService.addFriend(req.userId, friendId);
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getUserStats = async (req, res) => {
  try {
    const stats = await userService.calculateStats(req.params.userId);
    res.json(stats);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

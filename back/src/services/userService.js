const User = require('../models/userModel');

exports.addGameToUser = async (userId, game) => {
  if (!game.id || !game.name) {
    throw new Error('Game id and name are required');
  }

  const user = await User.findById(userId);
  const alreadyExists = user.games.some(g => g.id === game.id);

  if (alreadyExists) {
    throw new Error('Game already added');
  }

  user.games.push({ ...game, addedAt: new Date() });
  await user.save();

  return {
    message: 'Game added successfully',
    games: user.games
  };
};

exports.getUserGames = async (userId) => {
  const user = await User.findById(userId);
  return user.games;
};

exports.removeGameFromUser = async (userId, gameId) => {
  const user = await User.findById(userId);
  const originalLength = user.games.length;

  user.games = user.games.filter(game => game.id !== gameId);

  if (user.games.length === originalLength) {
    throw new Error('Game not found in user list');
  }

  await user.save();
};


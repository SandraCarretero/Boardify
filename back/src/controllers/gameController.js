const bggService = require('../services/bggService');

exports.searchGames = async (req, res) => {
  const query = req.query.q;
  if (!query) return res.status(400).json({ error: 'Missing search query' });

  try {
    const results = await bggService.searchBoardGames(query);
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: 'Search failed' });
  }
};

exports.getGameDetails = async (req, res) => {
  const { id } = req.params;

  try {
    const details = await bggService.getGameDetails(id);
    res.json(details);
  } catch (error) {
    res.status(500).json({ error: 'Could not fetch game details' });
  }
};

exports.createSession = async (req, res) => {
  try {
    const { game, players, duration } = req.body;

    const newSession = await bggService.createGameSession({
      game,
      creator: req.userId, 
      players,
      duration
    });

    res.status(201).json(newSession);
  } catch (err) {
    res.status(400).json({
      error: err.message || 'Error al crear la partida'
    });
  }
};

exports.getUserSessions = async (req, res) => {
  try {
    const sessions = await bggService.getUserSessions(req.params.userId);
    res.status(200).json({
      success: true,
      count: sessions.length,
      sessions
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: 'Error al obtener partidas: ' + err.message
    });
  }
};

exports.getTimeline = async (req, res) => {
  try {
    const sessions = await bggService.getFriendsSessions(req.userId);
    res.json(sessions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const axios = require('axios');
const xml2js = require('xml2js');

const parser = new xml2js.Parser({ explicitArray: false });

const getName = nameField => {
  if (!nameField) return '';
  if (Array.isArray(nameField)) {
    const primary = nameField.find(n => n.$.type === 'primary');
    if (primary) return primary.$.value;
    return nameField[0].$.value || '';
  } else {
    if (nameField.$?.type === 'primary') return nameField.$.value;
    return nameField.$?.value || '';
  }
};

exports.searchBoardGames = async query => {
  try {
    const searchUrl = `https://boardgamegeek.com/xmlapi2/search?query=${encodeURIComponent(
      query
    )}&type=boardgame`;
    const response = await axios.get(searchUrl);
    const result = await parser.parseStringPromise(response.data);
    const items = result.items?.item || [];
    const games = Array.isArray(items) ? items : [items];

    return games.map(game => ({
      id: game.$.id,
      name: getName(game.name),
      year: game.yearpublished?.$.value || ''
    }));
  } catch (error) {
    console.error('Error searching games:', error);
    throw error;
  }
};

exports.getGameDetails = async id => {
  try {
    const detailUrl = `https://boardgamegeek.com/xmlapi2/thing?id=${id}`;
    const response = await axios.get(detailUrl);
    const result = await parser.parseStringPromise(response.data);

    const game = result.items.item;
    return {
      id: game.$.id,
      name: getName(game.name),
      year: game.yearpublished?.$.value,
      description: game.description,
      minPlayers: game.minplayers?.$.value,
      maxPlayers: game.maxplayers?.$.value,
      playingTime: game.playingtime?.$.value,
      image: game.image
    };
  } catch (error) {
    console.error('Error getting game details:', error);
    throw error;
  }
};

exports.createGameSession = async ({ game, creator, players, duration }) => {
  try {
    const newSession = new GameSession({
      game,
      creator,
      players,
      duration
    });

    await newSession.save();
    return newSession;
  } catch (error) {
    console.error('Error creating session:', error);
    throw new Error('Failed to create game session');
  }
};

exports.getUserSessions = async userId => {
  try {
    return await GameSession.find({
      $or: [{ creator: userId }, { 'players.user': userId }]
    })
      .populate('creator', 'username')
      .populate('players.user', 'username')
      .sort({ date: -1 });
  } catch (error) {
    console.error('Error fetching user sessions:', error);
    throw error;
  }
};

exports.getFriendsSessions = async userId => {
  const user = await User.findById(userId).select('friends');
  return GameSession.find({
    $or: [
      { creator: { $in: user.friends } },
      { 'players.user': { $in: user.friends } }
    ]
  })
    .sort({ date: -1 })
    .limit(20);
};

const User = require('../models/userModel');

module.exports = async (req, res, next) => {
  const user = await User.findById(req.userId);
  if (!user.friends.includes(req.params.userId)) {
    return res.status(403).json({ error: 'No tienes acceso a este perfil' });
  }
  next();
};

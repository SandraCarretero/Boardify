const authService = require('../services/authService');

exports.register = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const { token, user } = await authService.register({
      username,
      email,
      password
    });

    res.status(201).json({
      status: 'success',
      data: { token, user }
    });
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res) => {
  try {
    const result = await authService.login(req.body);
    res.json(result);
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
};
exports.getMe = async (req, res) => {
  try {
    const user = await authService.getMe(req.user._id);
    res.status(200).json(user);
  } catch (error) {
    console.error('Error en getMe:', error);
    res.status(500).json({ message: 'Error al obtener el usuario' });
  }
};

exports.verifyToken = (req, res) => {
  res.json({ valid: true });
};

exports.deleteMyAccount = async (req, res) => {
  try {
    const deletedUser = await authService.deleteUserById(req.userId);

    res.status(200).json({
      success: true,
      message: 'Tu cuenta ha sido eliminada exitosamente',
      deletedUser
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message || 'Error al eliminar la cuenta'
    });
  }
};

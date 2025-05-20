const jwt = require('jsonwebtoken');
const JWT_SECRET = 'secret_key';

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ error: 'Authorization header missing' });
  }

  const parts = authHeader.split(' ');
  if (parts.length !== 2 || parts[0] !== 'Bearer') {
    return res.status(401).json({ error: 'Formato debe ser: Bearer <token>' });
  }

  const token = parts[1];

  if (token.split('.').length !== 3) {
    return res.status(401).json({ error: 'Token mal formado' });
  }

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      console.error('Error de verificación JWT:', err);
      return res.status(401).json({
        error: 'Token inválido',
        details: err.message
      });
    }

    req.userId = decoded.id;
    next();
  });
};

const emailService = require('../services/emailService');

/**
 * Controlador para enviar un correo electrónico
 * @param {Object} req - Objeto de solicitud Express
 * @param {Object} res - Objeto de respuesta Express
 */
const sendEmail = async (req, res) => {
  try {
    const result = await emailService.sendEmail(req.body);
    
    if (result.success) {
      return res.status(200).json({ message: result.message });
    } else {
      return res.status(500).json({ error: result.error });
    }
  } catch (error) {
    console.error('Error en el controlador de email:', error);
    return res.status(500).json({ error: 'Error interno del servidor.' });
  }
};

/**
 * Controlador para la ruta de prueba
 * @param {Object} req - Objeto de solicitud Express
 * @param {Object} res - Objeto de respuesta Express
 */
const testRoute = (req, res) => {
  res.send('Servidor de emails funcionando correctamente.');
};

module.exports = {
  sendEmail,
  testRoute
}; 
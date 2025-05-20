const User = require('../models/userModel');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'secret_key';
const { sendRegistrationConfirmation } = require('../services/emailService');
const { AppError } = require('../utils/errorUtils');

const generateToken = user => {
  return jwt.sign(
    { id: user._id, email: user.email, role: user.role },
    JWT_SECRET,
    { expiresIn: '24h' }
  );
};

exports.register = async ({ username, email, password }) => {
  const existingUser = await User.findOne({ email });
  if (existingUser) throw new AppError('El email ya está registrado', 400);

  const user = new User({ username, email, password });
  await user.save();

  await sendRegistrationConfirmation({
    username: user.username,
    email: user.email
  });

  const token = generateToken(user);

  return {
    token,
    user: {
      id: user._id,
      username: user.username,
      email: user.email
    }
  };
};

exports.login = async ({ email, password }) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error('User not found');

  const match = await user.comparePassword(password);
  if (!match) throw new Error('Invalid credentials');

  const payload = {
    id: user._id.toString(),
    email: user.email
  };

  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' });

  return { token, username: user.username };
};

exports.deleteUserById = async userId => {
  if (!mongoose.Types.ObjectId.isValid(userId)) {
    throw new Error('Invalid user ID');
  }

  const user = await User.findByIdAndDelete(userId);
  if (!user) throw new Error('User not found');
  return user;
};

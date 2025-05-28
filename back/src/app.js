const express = require('express');
const cors = require('cors');

const gameRoutes = require("./routes/gameRoutes");
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");
const emailRoutes = require("./routes/emailRoutes");

const { errorHandler } = require('./middlewares/errorMiddleware.js'); 

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/games', gameRoutes);
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/email', emailRoutes);

app.use(errorHandler);

module.exports = app;

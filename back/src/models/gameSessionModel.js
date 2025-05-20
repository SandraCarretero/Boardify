const mongoose = require('mongoose');

const gameSessionSchema = new mongoose.Schema({
  game: { 
    type: String, 
    required: [true, 'El nombre del juego es obligatorio'] 
  },
  creator: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  players: [{
    user: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'User' 
    },
    won: { 
      type: Boolean, 
      default: false 
    },
    score: Number
  }],
  duration: { 
    type: Number, 
    min: [1, 'La duración mínima es 1 minuto'] 
  },
  date: { 
    type: Date, 
    default: Date.now 
  }
});

module.exports = mongoose.model('GameSession', gameSessionSchema);
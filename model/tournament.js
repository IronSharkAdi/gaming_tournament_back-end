const mongoose = require('mongoose')

const tournamentSchema = new mongoose.Schema({
  tournamentName: {
    type: String,
    required: true
  },
  timeAndDate: {
    type: Date,
    required: true,
  },
  teams: {
    type : Array , 
    default : []
  }
})

module.exports = mongoose.model('Tournament', tournamentSchema)
const mongoose = require('mongoose')

const teamSchema = new mongoose.Schema({
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

module.exports = mongoose.model('Tournament', teamSchema)
// import
const mongoose = require("mongoose");

// create schema
const matchSchema = new mongoose.Schema({
    link: {type: String, unique: true, required: true},
    date: Date,
    gender: String,
    tournament: String,
    round: String,
    player1: String,
    player2: String,
    surface: String,
    result: String,
    winner: String,
    loser: String,
    score: String,
    sets: Number
});

// create model
const Match = mongoose.model("Match", matchSchema);

// export schema
module.exports = Match;
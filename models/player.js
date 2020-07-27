// import
const mongoose = require("mongoose");


// create schema
const playerSchema = new mongoose.Schema({
  link_ml: {type: String, unique: true},
  link_ta: String,
  gender: String,
  fullname: String,
  lastname: String,
  dob: Date,
  ht: Number,
  hand: String,
  backhand: Number,
  country: String,
  twitter: String,
  itf_id: String,
  atp_id: String,
  dc_id: String,
  wiki_id: String,
  img: String,
  matches: [
    {type: mongoose.Schema.Types.ObjectId, ref: "Match"}
  ]
});

// create model
const Player = mongoose.model("Player", playerSchema);

// export schema
module.exports = Player;



const mongoose = require("mongoose");


// create schema
const playerSchema = new mongoose.Schema({
  link_orig: String,
  link_ta: String,
  fullname: String,
  lastname: String,
  dob: String,
  ht: String,
  hand: String,
  backhand: String,
  country: String,
  twitter: String,
  itf_id: String,
  atp_id: String,
  dc_id: String,
  wiki_id: String,
  gender: String
});

// create model
const Player = mongoose.model("Player", playerSchema);

// export schema
module.exports = Player;




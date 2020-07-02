// import
const mongoose = require("mongoose");
const axios = require("axios");
const cheerio = require("cheerio");

// connect to DB
//const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mcp";
//mongoose.connect(MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
//.then(() => console.log("CONNECTED TO DB"))
//.catch(err => console.log(err));


// create schema
const playerSchema = new mongoose.Schema({
  //link_orig: String,
  link_ta: {type: String, unique: true},
  gender: String,
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
  img: String
});

// create model
const Player = mongoose.model("Player", playerSchema);

// export schema
module.exports = Player;


// ================
// SCRAPING
// ================

// 1) get to link of all players: http://www.minorleaguesplits.com/tennisabstract/cgi-bin/frags/
    // check links against DB
// 2) get to link of one player: http://www.minorleaguesplits.com/tennisabstract/cgi-bin/frags/RogerFederer.js
// 3) get to tennisabstract link of that player: http://www.tennisabstract.com/cgi-bin/player-classic.cgi?p=RogerFederer
// 4) get variables
// 5) push to DB


//const getLinkTA = function(link_ml) {
//  axios.get(link_ml).then(function(response) {
//    const $ = cheerio.load(response.data);
//    let link_ta = $('a').first().attr('href');
//    link_ta = link_ta.replace('-classic', '');

//  })

//}
//console.log(getLinkTA('http://www.minorleaguesplits.com/tennisabstract/cgi-bin/frags/RogerFederer.js'));


//const addPlayerToDB = function(link_ta) {
//  axios.get(link_ta).then(function(response) {
    
//      const $ = cheerio.load(response.data);

//      // object to store column:value pairs
//      const playerObj = {};
//      // add link to object
//      playerObj['link_ta'] = link_ta;
//      // add gender
//      playerObj['gender'] = link_ta.includes('wplayer') ? "W" : "M";

//      // list of columns we will iterate through
//      const columnArr = ["fullname", "lastname", "dob", "ht", "hand", "backhand", "country", "twitter", "itf_id", "atp_id", "dc_id", "wiki_id"]
      
//      const script = $("script[language='JavaScript']")['0'].children['0'].data;

//      // iterate through column array
//      // column values can be found in script tag: var [column] = [value];
//      // so I'll split by column name and semicolon
//      for (let column of columnArr) {
//          let delimStart = `var ${column} = `;
//          let delimEnd = ";";
//          let value = script.split(delimStart)[1].split(delimEnd)[0];
//          // add to object (remove single quotes from string)
//          playerObj[column] = value.replace(/'/g,"");
//      }
//      // add image
//      let photo = script.split("var photog = ")[1].split(";")[0];
//      if (photo !== "''") {
//          photo = `http://www.tennisabstract.com/photos/${playerObj['fullname'].toLowerCase().replace(/ /g, "_")}-${photo}.jpg`;
//      }
//      playerObj['img'] = photo.replace(/'/g,"");

//      console.log(playerObj);
      
//      // create player record
//      //Player.create(playerObj, function(err, newPlayer) {
//      //    if (err) {
//      //        console.log(err);
//      //    } else {
//      //        console.log(`Added ${playerObj['fullname']}`);
//      //    }
//      //})

//  });
//}

//const getPlayersInDB = function() {
//  Player.find({}).select({'link_ta': 1, '_id': 0}).exec(function(err, players) {
//    if (err) {
//      console.log(err);
//    } else {
//      console.log(players.map(player => player.link_ta));
      
//    }
//  });

//}







//const testlink = 'http://www.minorleaguesplits.com/tennisabstract/cgi-bin/frags/RafaelNadal.js';
//axios.get(testlink)
//.then(function(response) {
//  const $ = cheerio.load(response.data);
//  let link = $("a").first().attr('href');
//  return link.replace('-classic','');
//})
//.catch(function(error) {
//  console.log(error);
//})
//.then(function(link) {
//  //console.log(link)
//  addPlayerToDB(link);
//})

//addPlayerToDB('http://www.tennisabstract.com/cgi-bin/player.cgi?p=RafaelNadal')

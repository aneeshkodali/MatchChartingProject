// import
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Player = require("./models/player");



// ================
// APP CONFIG
// ================
const app = express();
// parse request body as JSON
app.use(bodyParser.urlencoded({extended: true}));
// config app to use ejs files
app.set("view engine", "ejs");


// ================
// DB CONFIG
// ================
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mcp";
mongoose.connect(MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log("CONNECTED TO DB"))
.catch(err => console.log(err));



// ================
// ROUTES
// ================

// http://localhost:3000/

// root
app.get("/", function(req, res) {
    res.render("home");
});


const port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log("Server now running");
})


// ================
// SCRAPING
// ================

//const axios = require("axios");
//const cheerio = require("cheerio");

// 1) get to link of all players: http://www.minorleaguesplits.com/tennisabstract/cgi-bin/frags/
    // check links against DB
// 2) get to link of one player: http://www.minorleaguesplits.com/tennisabstract/cgi-bin/frags/RogerFederer.js
// 3) get to tennisabstract link of that player: http://www.tennisabstract.com/cgi-bin/player-classic.cgi?p=RogerFederer
// 4) get variables
// 5) push to DB

//const link = "http://www.minorleaguesplits.com/tennisabstract/cgi-bin/frags/"
//const playerLink = "http://www.minorleaguesplits.com/tennisabstract/cgi-bin/frags/RogerFederer.js"
//const playerLinkTA = "http://www.tennisabstract.com/cgi-bin/player-classic.cgi?p=RogerFederer"

//const scrape = function(link="http://www.minorleaguesplits.com/tennisabstract/cgi-bin/frags/") {
//  const playerLinks = [];
//  return axios.get(link).then(function(response) {

//    const $ = cheerio.load(response.data);

//    const trArr = $("table tr").each(function(i, elem) {
//      let playerLink = $(this).find('a').attr('href');
//      if (playerLink && playerLink.endsWith(".js")) {
//        playerLinks.push(link+playerLink);
//      }
//    });
//    return playerLinks;
//  });
//}


//const link_ta = "http://www.tennisabstract.com/cgi-bin/player-classic.cgi?p=RogerFederer";

//const getTAData = function(link="http://www.tennisabstract.com/cgi-bin/player-classic.cgi?p=RogerFederer") {

//  return axios.get(link).then(function(response) {
//    const $ = cheerio.load(response.data);

//    const script = $('script').filter(function(i, elem) {
//      return $(this).attr("language") === "JavaScript";
//    });
//  })
//}

//console.log(getTAData());

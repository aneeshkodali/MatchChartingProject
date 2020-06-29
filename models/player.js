//const mongoose = require("mongoose");

const { default: Axios } = require("axios")

// 1) get to link of all players: http://www.minorleaguesplits.com/tennisabstract/cgi-bin/frags/
    // check links against DB
// 2) get to link of one player: http://www.minorleaguesplits.com/tennisabstract/cgi-bin/frags/RogerFederer.js
// 3) get to tennisabstract link of that player: http://www.tennisabstract.com/cgi-bin/player-classic.cgi?p=RogerFederer
// 4) get variables
// 5) push to DB

const link = "http://www.minorleaguesplits.com/tennisabstract/cgi-bin/frags/"
//const playerLink = "http://www.minorleaguesplits.com/tennisabstract/cgi-bin/frags/RogerFederer.js"
//const playerLinkTA = "http://www.tennisabstract.com/cgi-bin/player-classic.cgi?p=RogerFederer"


const axios = require("axios");
const cheerio = require("cheerio");



//axios.get(link)
//  .then(function (response) {
//    // handle success
//    const html = response.data;
//    const $ = cheerio.load(html);
//    const rows = $('table tr');
//    const playerArr = [];
//    //console.log(rows.length);
//    rows.each(function(index, element) {
//        let linkPlayer = $(element).find('a').attr('href');
//        if (linkPlayer && linkPlayer.endsWith('.js')) {
//            playerArr.push(link+linkPlayer);
//        }
//    })
//    console.log(playerArr);
   
//  })
//  .catch(function (error) {
//    // handle error
//    console.log(error);
//  })
//  .finally(function () {
//    // always executed
//  });

//  const pLink = 'http://www.minorleaguesplits.com/tennisabstract/cgi-bin/frags/AaronAddison.js'
//  axios.get(pLink)
//  .then(function (response) {
//    // handle success
//    const html = response.data;
//    const $ = cheerio.load(html);
//    let link = $('a').first().attr('href');
//    console.log(link);
   
//  })
//  .catch(function (error) {
//    // handle error
//    console.log(error);
//  })
//  .finally(function () {
//    // always executed
//  });

const linkTA = "http://www.tennisabstract.com/cgi-bin/player-classic.cgi?p=AaronAddison"
axios.get(linkTA)
  .then(function (response) {
    // handle success
    const html = response.data;
    const $ = cheerio.load(html);
    const variables = $('script')[3];
    console.log(variables);
    
   
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
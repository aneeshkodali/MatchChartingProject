const mongoose = require("mongoose");
const axios = require("axios");
const cheerio = require("cheerio");


// 1) get to link of all players: http://www.minorleaguesplits.com/tennisabstract/cgi-bin/frags/
    // check links against DB
// 2) get to link of one player: http://www.minorleaguesplits.com/tennisabstract/cgi-bin/frags/RogerFederer.js
// 3) get to tennisabstract link of that player: http://www.tennisabstract.com/cgi-bin/player-classic.cgi?p=RogerFederer
// 4) get variables
// 5) push to DB

const link = "http://www.minorleaguesplits.com/tennisabstract/cgi-bin/frags/"
//const playerLink = "http://www.minorleaguesplits.com/tennisabstract/cgi-bin/frags/RogerFederer.js"
//const playerLinkTA = "http://www.tennisabstract.com/cgi-bin/player-classic.cgi?p=RogerFederer"


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

function getSrc() {   
  return axios.get('http://www.minorleaguesplits.com/tennisabstract/cgi-bin/frags/');
}
const test = getSrc().then(function (response) {
  return response.data; // now the data is accessable from here.
}).catch(function (response) {
  console.log(response);
});
console.log(test);


//axios.get(master_link="http://www.minorleaguesplits.com/tennisabstract/cgi-bin/frags/")
//  .then(function (response) {
//    // handle success
//    const html = response.data;
//    const $ = cheerio.load(html);
//    const player_links = $('table tr');
//    player_links.each(function(index, element) {
//      let player_link = $(element).find('a').attr('href');
//      if (player_link && player_link.endsWith('.js')) {
//        console.log(player_link);
//      }
//  })
//  })
//  .catch(function (error) {
//    // handle error
//    console.log(error);
//  })
//  .finally(function () {
//    // always executed
//  });

//async function playersSite(master_link="http://www.minorleaguesplits.com/tennisabstract/cgi-bin/frags/") {

//  let res = await axios.get(master_link);

//  let data = res.data;
//  const $ = cheerio.load(data);
//  const players = $('table tr');
//  players.each(function(index, player) {
//    let playerLink = $(player).find('a').attr('href');
//    if (playerLink && playerLink.endsWith('.js')) {
//      //console.log(master_link+playerLink);
//      playerArr.push(master_link+playerLink);
//    }
//  })
//  return playerArr;
//}

//console.log(playersSite());


//function findPlayersOnSite(master_link="http://www.minorleaguesplits.com/tennisabstract/cgi-bin/frags/") {

//  axios.get(master_link)
//  .then(function (response) {
//    // handle success
//    const html = response.data;
//    const $ = cheerio.load(html);
//    const rows = $('table tr');
//    const playerArr = [];
//    rows.each(function(index, element) {
//        let linkPlayer = $(element).find('a').attr('href');
//        if (linkPlayer && linkPlayer.endsWith('.js')) {
//          //console.log(linkPlayer);
//            //playerArr.push(master_link+linkPlayer);
//        }
//    })
   
//  })
//  .catch(function (error) {
//    // handle error
//    console.log(error);
//  })
//  .finally(function () {
//    // always executed
//  });

//}
//console.log(findPlayersOnSite());

//function addRecordToDB2(link_orig) {

//  // initialize object to insert
//  const recordObj = {};
//  // add link_orig to object
//  recordObj['link_orig'] = link_orig;

//  // axios request to get link_TA (tennis abstract link with player data)
//  axios.get(link_orig)
//  .then(function(response) {
//    // handle success
//    const html = response.data;
//    const $ = cheerio.load(html);
//    // link is the first link on the page
//    let link_ta = $('a').first().attr('href');
//    console.log(link_ta)
//  })
//  .catch(function(error) {
//    // handle error
//    console.log(error)
//  })
//  .finally(function() {
//    //always executed
//  });



//  return recordObj;
//}

const link_orig = 'http://www.minorleaguesplits.com/tennisabstract/cgi-bin/frags/AaronAddison.js';
//console.log(addRecordToDB(link_orig));


//// initialize object to insert into mongoDB
//const recordObj = {};

//// add link_orig
//const link_orig = 'http://www.minorleaguesplits.com/tennisabstract/cgi-bin/frags/AaronAddison.js';
//recordObj['link_orig'] = link_orig;

//// axios to go to link_orig
//  axios.get(link_orig)
//  .then(function (response) {
//    // handle success
//    const html = response.data;
//    const $ = cheerio.load(html);
//    let link_ta = $('a').first().attr('href');
//    recordObj['link_ta'] = link_ta;
//    //console.log(link_ta);

   
//  })
//  .catch(function (error) {
//    // handle error
//    console.log(error);
//    recordObj['link_ta'] = '';
//  })
//  .finally(function () {
//    // always executed
//  });

//console.log(recordObj);

//const linkTA = "http://www.tennisabstract.com/cgi-bin/player-classic.cgi?p=AaronAddison"
//const linkTA = "http://www.tennisabstract.com/cgi-bin/wplayer.cgi?p=SerenaWilliams"
//axios.get(linkTA)
//  .then(function (response) {
//    // handle success
//    const html = response.data;
//    const $ = cheerio.load(html);
//    const varScript = $("script").filter(function(index, elem) {
//      return $(this).attr('language')==='JavaScript';
//    });
//    const varString = varScript['0'].children['0'].data;
//    const varObj = {}
//    const columnArr = ['fullname', 'lastname', 'dob', 'ht', 'hand', 'backhand', 'country', 'twitter', 'itf_id', 'atp_id', 'dc_id', 'wiki_id'];
//    const columnNum = ['ht', 'backhand'];
//    const columnDate = ['dob'];
//    for (let column of columnArr) {
//      let delimStart = `var ${column} = `;
//      let delimEnd = ";"
//      let columnVal = varString.split(delimStart)[1].split(delimEnd)[0];
//      varObj[column] = columnVal.replace(/'/g,'');
//    };
//    // gender
//    varObj['gender'] = linkTA.includes("wplayer") ? "W" : "M"
//    // photo
//    let img = varString.split("var photog = ")[1].split(";")[0];
//    if (img !== "''") {
//      img = `http://www.tennisabstract.com/photos/${varObj.fullname.toLowerCase().replace(" ","_")}-${photog}.jpg`;
//    }
//    varObj['img'] = img.replace(/'/g,'');

//    // link
//    varObj['link'] = linkTA;
   
  
//    console.log(varObj);

    
   
//  })
//  .catch(function (error) {
//    // handle error
//    console.log(error);
//  })
//  .finally(function () {
//    // always executed
//  });
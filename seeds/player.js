const mongoose = require("mongoose");
const Player = require("../models/player");

// seed data to add
const data = [
    {
    link_ml: "http://www.minorleaguesplits.com/tennisabstract/cgi-bin/frags/RogerFederer.js",
    link_ta: "http://www.tennisabstract.com/cgi-bin/player.cgi?p=RogerFederer",
    gender: "M",
    fullname: "Roger Federer",
    lastname: "Federer",
    dob: "1981-08-08",
    ht: 185,
    hand: "R",
    backhand: 1,
    country: "SUI",
    twitter: "rogerfederer",
    itf_id: "10019424",
    atp_id: "roger-federer/f324",
    dc_id: "800202678",
    wiki_id: "Roger_Federer",
    img: "http://www.tennisabstract.com/photos/roger_federer-sirobi.jpg"
    }
];

function seedDBPlayer() {
    // remove all players
    Player.deleteMany({}, function(err) {
        if (err) {
            console.log(err);
        }
        console.log("Removed Players!");

        // add seed data
        data.forEach(function(seed) {
            Player.create(seed, function(err, player) {
                if (err) {
                    console.log(err);
                } else {
                    console.log("added a player");
                }
            })
        })
    })
}


// export
module.exports = seedDBPlayer;



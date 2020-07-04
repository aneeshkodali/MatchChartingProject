const mongoose = require("mongoose");
const Match = require("../models/match");

// seed data to add
const data = [
    {
    link: "http://www.tennisabstract.com/charting/20080706-M-Wimbledon-F-Roger_Federer-Rafael_Nadal.html",
    date: "2008-07-06",
    gender: "M",
    tournament: "Wimbledon",
    round: "F",
    player1: "Roger Federer",
    player2: "Rafael Nadal",
    surface: "grass",
    winner: "Rafael Nadal",
    loser: "Roger Federer",
    score: "6-4 6-4 6-7(5) 6-7(8) 9-7",
    sets: 5
    }
];

function seedDBMatch() {
    // remove all match
    Match.deleteMany({}, function(err) {
        if (err) {
            console.log(err);
        }
        console.log("Removed Match!");

        // add seed data
        data.forEach(function(seed) {
            // create record in DB
            Match.create(seed, function(err, match) {
                if (err) {
                    console.log(err);
                } else {
                    console.log("added a match");
                }
            })
        })
    })
}


// export
module.exports = seedDBMatch;



const mongoose = require("mongoose");
const Match = require("../models/match");
const Player = require("../models/player");

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
    title: "2008 Wimbledon F: Roger Federer vs Rafael Nadal",
    surface: "grass",
    winner: "Rafael Nadal",
    loser: "Roger Federer",
    score: "6-4 6-4 6-7(5) 6-7(8) 9-7",
    sets: 5
    },

    {
    link: "http://www.tennisabstract.com/charting/20200130-M-Australian_Open-SF-Roger_Federer-Novak_Djokovic.html",
    date: "2020-01-30",
    gender: "M",
    tournament: "Australian Open",
    round: "SF",
    player1: "Roger Federer",
    player2: "Novak Djokovic",
    title: "2020 Australian Open SF: Roger Federer vs Novak Djokovic",
    surface: "hard",
    winner: "Novak Djokovic",
    loser: "Roger Federer",
    score: "7-6(1) 6-4 6-3",
    sets: 3
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
            // create record in Match Table
            Match.create(seed, function(err, match) {
                if (err) {
                    console.log(err);
                } else {
                    // loop through player1 and player2 and add match to their Player records
                    let players = [match.player1, match.player2];
                    for (let player of players) {
                        // find player record
                        Player.findOne({fullname: player}, function(err, playerRecord) {
                            if (err) {
                                console.log(`no player record for ${player}. Cannot add match to player.`);
                            } else {
                                // add match to matches array in player record
                                playerRecord.matches.push(match);
                                playerRecord.save();
                                console.log(`added match to ${player}'s player record!`);
                            }
                        })
                    }
                    
                }
            })
        })
    })
}


// export
module.exports = seedDBMatch;



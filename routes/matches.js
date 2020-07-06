const express = require("express");
const router = express.Router();
const Match = require("../models/match");

// INDEX - show all players
router.get("/", function(req, res) {
    Match.find({}, function(err, matches) {
        if (err) {
            console.log(err);
        } else {
            res.send("MATCHES PAGE");
            //res.render("players/index", {players: players});
        }
    })
});

// SHOW - show more info for 1 player
//router.get("/:id", function(req, res) {
//    // find players with given ID
//    Player.findById(req.params.id).populate("matches").exec(function(err, foundPlayer) {
//        if (err) {
//            console.log(err);
//        } else {
//            res.render("players/show", {player: foundPlayer});
//        }
//    })
//})


module.exports = router;
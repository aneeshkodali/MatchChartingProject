const express = require("express");
const router = express.Router();
const Match = require("../models/match");

// INDEX - show all players
router.get("/", function(req, res) {
    Match.find({}, function(err, matches) {
        if (err) {
            console.log(err);
        } else {
            res.render("matches/index", {matches: matches});
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
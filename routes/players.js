const express = require("express");
const router = express.Router();
const Player = require("../models/player");

// INDEX - show all players
router.get("/", function(req, res) {
    Player.find({}, function(err, players) {
        if (err) {
            console.log(err);
        } else {
            res.render("players/index", {players: players});
        }
    })
});

// SHOW - show more info for 1 player
router.get("/:id", function(req, res) {
    // find players with given ID
    Player.findById(req.params.id).exec(function(err, foundPlayer) {
        if (err) {
            console.log(err);
        } else {
            res.render("players/show", {player: foundPlayer});
        }
    })
})


module.exports = router;
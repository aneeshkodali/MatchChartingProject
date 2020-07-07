const express = require("express");
const router = express.Router();
const Player = require("../models/player");

// INDEX - show all players
router.get("/", function(req, res) {

    // check if there is a search param
    if (req.query.search) {
        
        const regex = new RegExp(escapeRegex(req.query.search), 'gi');
        // find player records
        Player.find({fullname: regex}, function(err, players) {
            if (err) {
                console.log(err);
            } else {
                res.render("players/index", {players: players});
            }
        })
    } else {
        // otherwise show all players...fix this later
        Player.find({}, function(err, players) {
            if (err) {
                console.log(err);
            } else {
                res.render("players/index", {players: players});
            }
        })
    }
    
});

// SHOW - show more info for 1 player
router.get("/:id", function(req, res) {
    // find players with given ID
    Player.findById(req.params.id).populate("matches").exec(function(err, foundPlayer) {
        if (err) {
            console.log(err);
        } else {
            res.render("players/show", {player: foundPlayer});
        }
    })
})

function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};


module.exports = router;
const express = require("express");
const router = express.Router();
const Match = require("../models/match");

// INDEX - show all matches
router.get("/", function(req, res) {
    Match.find({}, function(err, matches) {
        if (err) {
            console.log(err);
        } else {
            res.render("matches/index", {matches: matches});
        }
    })
});

// SHOW - show more info for 1 match
router.get("/:id", function(req, res) {
    // find match with given ID
    Match.findById(req.params.id).exec(function(err, foundMatch) {
        if (err) {
            console.log(err);
        } else {
            res.render("matches/show", {match: foundMatch});
        }
    })
})


module.exports = router;
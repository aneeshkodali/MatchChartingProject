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
        ht: "185",
        hand: "R",
        backhand: "1",
        country: "SUI",
        twitter: "rogerfederer",
        itf_id: "10019424",
        atp_id: "roger-federer/f324",
        dc_id: "800202678",
        wiki_id: "Roger_Federer",
        img: "http://www.tennisabstract.com/photos/roger_federer-sirobi.jpg"
    },

    {
        link_ml: "http://www.minorleaguesplits.com/tennisabstract/cgi-bin/frags/RafaelNadal.js",
        link_ta: "http://www.tennisabstract.com/cgi-bin/player.cgi?p=RafaelNadal",
        gender: "M",
        fullname: "Rafael Nadal",
        lastname: "Nadal",
        dob: "1986-06-03",
        ht: "185",
        hand: "L",
        backhand: "2",
        country: "ESP",
        twitter: "RafaelNadal",
        itf_id: "100007935",
        atp_id: "rafael-nadal/n409",
        dc_id: "800226907",
        wiki_id: "Rafael_Nadal",
        img: "http://www.tennisabstract.com/photos/rafael_nadal-sirobi.jpg"
    },

    {
        link_ml: "http://www.minorleaguesplits.com/tennisabstract/cgi-bin/frags/NovakDjokovic.js",
        link_ta: "http://www.tennisabstract.com/cgi-bin/player.cgi?p=NovakDjokovic",
        gender: "M",
        fullname: "Novak Djokovic",
        lastname: "Djokovic",
        dob: "1987-05-22",
        ht: "188",
        hand: "R",
        backhand: "2",
        country: "SRB",
        twitter: "DjokerNole",
        itf_id: "100004087",
        atp_id: "novak-djokovic/d643",
        dc_id: "800225217",
        wiki_id: "Novak_Djokovic",
        img: "http://www.tennisabstract.com/photos/novak_djokovic-sirobi.jpg"
    },

    {
        link_ml: "http://www.minorleaguesplits.com/tennisabstract/cgi-bin/frags/SerenaWilliams.js",
        link_ta: "http://www.tennisabstract.com/cgi-bin/wplayer.cgi?p=SerenaWilliams",
        gender: "W",
        fullname: "Serena Williams",
        lastname: "Williams",
        dob: "1981-09-26",
        ht: "175",
        hand: "R",
        backhand: "2",
        country: "USA",
        twitter: "serenawilliams",
        itf_id: "20007765",
        atp_id: "9044/title/serena-williams",
        dc_id: "800205424",
        wiki_id: "Serena_Williams",
        img: "http://www.tennisabstract.com/photos/serena_williams-sirobi.jpg"
    },

    {
        link_ml: "http://www.minorleaguesplits.com/tennisabstract/cgi-bin/frags/GarbineMuguruza.js",
        link_ta: "http://www.tennisabstract.com/cgi-bin/wplayer.cgi?p=GarbineMuguruza",
        gender: "W",
        fullname: "Garbine Muguruza",
        lastname: "Muguruza",
        dob: "1993-10-08",
        ht: "182",
        hand: "R",
        backhand: "2",
        country: "ESP",
        twitter: "GarbiMuguruza",
        itf_id: "100103866",
        atp_id: "15292/title/garbine-muguruza",
        dc_id: "80015731",
        wiki_id: "Garbine_Muguruza",
        img: "http://www.tennisabstract.com/photos/garbine_muguruza-sirobi.jpg"
    },

    {
        link_ml: "http://www.minorleaguesplits.com/tennisabstract/cgi-bin/frags/CarolineWozniacki.js",
        link_ta: "http://www.tennisabstract.com/cgi-bin/wplayer.cgi?p=CarolineWozniacki",
        gender: "W",
        fullname: "Caroline Wozniacki",
        lastname: "Wozniacki",
        dob: "1990-07-11",
        ht: "177",
        hand: "R",
        backhand: "2",
        country: "DEN",
        twitter: "CaroWozniacki",
        itf_id: "100052330",
        atp_id: "12631/title/caroline-wozniacki",
        dc_id: "800254714",
        wiki_id: "Caroline_Wozniacki",
        img: "http://www.tennisabstract.com/photos/caroline_wozniacki-kate.jpg"
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
            // create record in DB
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



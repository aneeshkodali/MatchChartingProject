// import
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const Player = require("./models/player");
const Match = require("./models/match");

const seedDBPlayer = require("./seeds/player");
const seedDBMatch = require("./seeds/match")

const playerRoutes = require("./routes/players");
const matchRoutes = require("./routes/matches")


// ================
// APP CONFIG
// ================
const app = express();
// parse request body as JSON
app.use(bodyParser.urlencoded({extended: true}));
// config app to use ejs files
app.set("view engine", "ejs");

seedDBPlayer();
seedDBMatch();

app.use("/players", playerRoutes);
app.use("/matches", matchRoutes);

// ================
// DB CONFIG
// ================
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mcp";
mongoose.connect(MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
.then(() => console.log("CONNECTED TO DB"))
.catch(err => console.log(err));





// ================
// ROUTES
// ================

// http://localhost:3000/

// root
app.get("/", function(req, res) {
    res.render("home");
});






const port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log("Server now running");
});




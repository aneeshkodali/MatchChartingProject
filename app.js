// import
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");



// ================
// APP CONFIG
// ================
const app = express();
// parse request body as JSON
app.use(bodyParser.urlencoded({extended: true}));
// config app to use ejs files
app.set("view engine", "ejs");


// ================
// DB CONFIG
// ================
mongoose.connect('mongodb://localhost/matchChartingProject', {useNewUrlParser: true, useUnifiedTopology: true});



// ================
// ROUTES
// ================

// http://localhost:3000/

// root
app.get("/", function(req, res) {
    res.render("index");
});


const port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log("Server now running");
})


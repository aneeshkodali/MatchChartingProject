// import
const express = require("express");




// APP CONFIG
const app = express();






// ================
// ROUTES
// ================

// http://localhost:3000/

// root
app.get("/", function(req, res) {
    res.send("HOME PAGE! YOU DID IT!");
});


const port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log("Server now running");
})


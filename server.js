// required npm modules
var express = require("express");
var app = express();
var bodyParser = require("body-parser");

// port
var PORT = process.env.PORT || 8080;

var jsonParser = bodyParser.json();

var urlencoderParser = bodyParser.urlencoded({ extended: false })

// parse json, html, etc.
app.use(bodyParser.json({ type: "application/*+json" }))
app.use(bodyParser.raw({ type: "application/vnd.custom-type" }))
app.use(bodyParser.text({ type: "text/html" }))

// routes to html/api
require("./app/routing/htmlRoutes.js")(app);
require("./app/routing/apiRoutes.js")(app);

// listener and confirm connection via console log
app.listen(PORT, function() {
    console.log("Connected, active on port:" + PORT);
});
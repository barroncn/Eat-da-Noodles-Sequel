//Server Set Up
//========================================================================================================================================

// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var exphbs = require("express-handlebars");
var path = require("path");
var db = require("./models")


// Express
//==============================================================
var app = express();
var PORT = process.env.PORT || 8080; 


// BodyParser
//==============================================================
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'applicaiton/**json' }));
// parse some custom thing into a Buffer
app.use(bodyParser.json({ type: 'application/vnd.custom-type' }));
// parse an HTML body into a string
app.use(bodyParser.text({ type: 'text/html' }));
// allow access to public folder
app.use(express.static("./public"));


//Handlebars
//==============================================================
app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");


// Routes
// =============================================================
var routes = require("./controllers/burgers_controller.js");
app.use("/", routes);


// Starts the server to begin listening
// =============================================================
db.sequelize.sync().then(function(){
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
});


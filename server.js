var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var PORT = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Import and use the routes
var routes = require("./controllers/burgersController.js");
app.use(routes);

// Start server so it listens for client requests
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});


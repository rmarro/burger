var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var PORT = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));


// Handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import and use the routes
var routes = require("./controllers/burgersController.js");
app.use(routes);

// Start server so it listens for client requests
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});


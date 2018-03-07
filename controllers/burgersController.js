var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

// Get all burgers data
router.get("/", function(req, res) {
    burger.all(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

// Make new burger
router.post("/api/burgers", function(req, res) {
    burger.create(["burger_name", "devoured"], [req.body.name, req.body.devoured], function(result) {
        // send back the id of the new burger
        res.json({id: result.insertId});
    });
});

// Take in burger id and update its devoured status
router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    var objColVals = "devoured = " + req.body.devoured;
    burger.update(objColVals, condition, function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;
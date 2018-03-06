var connection = require("./connection.js");

var orm = {
    selectAll: function(tableInput, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], function(err, result) {
            if (err) throw err;
            cb(result);
        })
    },

    insertOne: function() {

    },

    updateOne: function() {

    }
};

orm.selectAll("burgers", function(result) {
    console.log(result)
});

module.exports = orm;
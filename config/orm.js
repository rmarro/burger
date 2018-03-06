var connection = require("./connection.js");

var orm = {
    selectAll: function(table, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], function(err, result) {
            if (err) throw err;
            cb(result);
        })
    },

    insertOne: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(queryString, [table, cols, vals], function(err, result) {
            if (err) throw err;
            cb(result);
        })
    },

    updateOne: function() {

    }
};

orm.insertOne("burgers", ["burger_name", "devoured"], ["test2", false], function(result) {
    console.log(result);
});

// orm.selectAll("burgers", function(result) {
//     console.log(result)
// });

module.exports = orm;
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

    updateOne: function(table, objColVals, condition, cb) {
        var queryString = `UPDATE ${table} SET ${objColVals} WHERE ${condition}`;
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        })
    }
};

// Test works
// orm.selectAll("burgers", function(result) {
//     console.log(result)
// });

// Test works
// orm.insertOne("burgers", ["burger_name", "devoured"], ["test2", false], function(result) {
//     console.log(result);
// });

// Test works
// orm.updateOne("burgers", "devoured = true", "id = 1", function(result) {
//     console.log(result);
// });

module.exports = orm;
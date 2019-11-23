// Import the ORM to create functions that will interact with the database.
const orm = require('../config/orm');

const burger = {
    all: function(callback) {
        orm.findAll("burgers", function(res) {
            callback(res);
        });
    },
    
    create: function (cols, vals, callback) {
        orm.create("burgers", cols, vals, function (res) {
            callback(res);
        });
    },

    update: function(cols, vals, callback) {
        orm.update("burgers", cols, vals, function(res){
            callback(res);
        })
    },

    delete: function(col, val, callback) {
        orm.delete("burgers", col, val, function (res) {
            callback(res);
        });
    }
}

// Export the database functions
module.exports = burger;
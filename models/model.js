// Import the ORM to create functions that will interact with the database.
const orm = require('../config/orm');

const burger = {
    findAll: function(callback) {
        orm.findAll('burgers', function(res) {
            callback(res);
        });
    },
    
    create: function (cols, vals, callback) {
        console.log(vals)
        orm.create('burgers', cols, vals, function (res) {
            callback(res);
        });
    },

    update: function(changedCol, newVal, baseCol, baseVal, callback) {
        orm.update('burgers', changedCol, newVal, baseCol, baseVal, function(res){
            callback(res);
        })
    },

    delete: function(col, val, callback) {
        orm.delete('burgers', col, val, function (res) {
            callback(res);
        });
    }
}

// Export the database functions
module.exports = burger;
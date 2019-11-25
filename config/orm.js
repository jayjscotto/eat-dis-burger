const connection = require('../config/connection');

function placeholderPrint(number) {
    let arr = [];

    for(let i = 0; i < number; i++){
        arr.push('?');
    }

    return arr.toString();
}


const orm = {
    findAll: function (table, callback) {
        //function for all
        let query = 'SELECT * from burgers';
        connection.query(query, function (err, result){
            if (err) throw err;

            callback(result);
        })
    },

    create: function (table, cols, vals, callback) {
        let query = `INSERT INTO ${table} (${cols.toString()}) VALUES (${placeholderPrint(vals.length)});`

        connection.query(query, vals, function (err, result) {
            if (err) throw err;

            callback(result);
        });
    },

    update: function (table, changedCol, newVal, baseCol, baseVal, callback) {
        let query = `UPDATE ?? SET ?? = ? WHERE ?? = ?`;

        connection.query(query, [table, changedCol, newVal, baseCol, baseVal], function (err, result) {
            if (err) throw err;

            callback(result);
        });
    },

    delete: function (table, col, val, callback) {
        let query = `DELETE FROM ?? WHERE ?? = ?`

        connection.query(query, [table, col, val], function (err, result) {
            if (err) throw err;

            callback(result);
        });

    }
}

module.exports = orm;
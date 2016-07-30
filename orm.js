/*****
/* Find all parties, ordering them by party cost
/* Find parties by the name of the party
/* Find the client with the most parties
/*
/* BONUS: create a function within your ORM that will let 
/* the user add more clients and parties to the database.
/*****/
var connection = require('./connection.js');

// object relational mapper (ORM)

var orm = {
    selectWhere: function (tableInput, colToSearch, valOfCol) {
        var queryString = 'SELECT * FROM ' + tableInput + 
                         ' WHERE ' + colToSearch + ' = ?';
        connection.query(queryString, [valOfCol], function (err, result) {
            console.log(result);
        });
    },
    selectAndOrder: function (whatToSelect, table, orderCol, orderBy) {
        var queryString = 'SELECT ' + whatToSelect + ' FROM ' + table + 
                         ' ORDER BY ' + orderCol + ' ' + orderBy;
        console.log(queryString);
        connection.query(queryString, function (err, result) {
            console.log(result);
        });
    },
    findWhoHasMost: function (tableOneCol, tableTwoForeignKey, tableOne, tableTwo) {
        var queryString = 'SELECT ' + tableOneCol + 
                        ', COUNT(' + tableOneCol + 
                        ') AS count FROM ' + tableOne + 
                        ' LEFT JOIN ' + tableTwo + 
                        ' ON ' + tableTwo + '.' + tableTwoForeignKey + 
                        '= ' + tableOne + '.id GROUP BY ' + tableOneCol + 
                        ' ORDER BY count desc LIMIT 1';
        connection.query(queryString, function (err, result) {
            console.log(result);
        });
    },
    addRow: function (tableToUse, columns, data) {
        var queryString = 'INSERT INTO ' + tableToUse + '( ';

        if (columns.length != values.length) throw ('The number of columns must equal the number of values');
        
        // Append columns to the query
        for (var i=0; i<columns.length; i++) {
            queryString += column[i];
        }

        queryString += ' )' + ' VALUES ( ';

        // Append values to the query
        for (var i=0; i<values.length; i++) {
            queryString += values[i];
        }

     }
};

module.exports = orm;
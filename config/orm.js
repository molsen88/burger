var connection = require( "./connection.js" );

module.exports = {

    selectAll: function ( table, cb ) {
        var queryString = 'SELECT*FROM ??'
        connection.query( queryString, [table],
            function ( err, data ) {
                if ( err ) {
                    throw err
                }
                cb( data )
                // console.log( data )
            } )

    },
    insertInto: function ( table, col, frontData, cb ) {
        var queryString = 'INSERT INTO ?? (??) VALUES (?)'
        connection.query( queryString, [table, col, frontData.burgers],
            function ( err, data ) {
                if ( err ) {
                    throw err
                }
                cb( data )
                console.log( data )
            } )

    },
    updateRow: function ( table, id, cb ) {
        var queryString = 'UPDATE ?? SET completed = 1 WHERE id = ?;'
        connection.query( queryString, [table, id], function ( err, data ) {
            if ( err ) {
                throw err;
            }
            cb( data )
        } )
    }
}


// updateOne()
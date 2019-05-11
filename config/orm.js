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

    }
}

// insertOne()
// updateOne()
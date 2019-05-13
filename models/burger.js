var burgerOrm = require( '../config/orm.js' )
console.log( burgerOrm )

module.exports = {

    getAllBurgers: function ( cb ) {

        burgerOrm.selectAll( 'burgers', cb )

    },
    postBurgers: function ( frontData, cb ) {
        burgerOrm.insertInto( 'burgers', 'burger_name', frontData, cb )

    },
    putBurgers: function ( id, cb ) {
        burgerOrm.updateRow( 'burgers', id, cb )
    }
}

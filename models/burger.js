var burgerOrm = require( '../config/orm.js' )
console.log( burgerOrm )

module.exports = {

    getAllBurgers: function ( cb ) {

        burgerOrm.selectAll( 'burgers', cb )

    }
}

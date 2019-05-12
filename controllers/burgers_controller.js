var express = require( 'express' )
var burgerModel = require( '../models/burger.js' )
var router = express.Router()

router.get( '/', function ( request, response ) {
    burgerModel.getAllBurgers( function ( data ) {
        // console.log( data, "This is from burgers_controllers bringing stuff from our database" )


        var burgersObj = {
            burgers: data
        }
        response.render( 'index', burgersObj )
    } )
} )
// define the about route
// router.get( '/about', function ( req, res ) {
//     res.send( 'About birds' )
// } )

module.exports = router


// [
//     RowDataPacket {
//     id: 1,
//         burger_name: 'Cheeseburger Deluxe',
//             devoured: 1
// },
// RowDataPacket { id: 2, burger_name: 'Bacon Cheddar', devoured: 1 },
// RowDataPacket { id: 3, burger_name: 'Veggie Burger', devoured: 1 }
// ]
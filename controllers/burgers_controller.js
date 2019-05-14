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
// define the route
router.post( '/api/burger', function ( request, response ) {
    console.log( request.body )
    var frontData = request.body;
    burgerModel.postBurgers( frontData, function ( data ) {
        console.log( data )

    } )
    res.status( 200 ).send( "Row added to the database" )
    location.reload();
} )


router.put( '/api/burger:id', function ( request, response ) {
    console.log( request.params, 'this is our request parameters' )
    var id = request.params.id;
    burgerModel.putBurgers( id, function ( data ) {
        console.log( data, 'this row updated' )

    } )
    res.send()
} )
router.delete( 'burgers:id', function ( request, response ) {
    res.send( 'About birds' )
} )

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
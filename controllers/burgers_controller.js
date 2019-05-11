var express = require( 'express' )
var burgerModel = require( '../models/burger.js' )
var router = express.Router()

router.get( '/', function ( request, response ) {
    burgerModel.getAllBurgers( function ( data ) {
        console.log( data, "This is from burgers_controllers bringing stuff from our database" )
    } )
    response.end()

} )
// define the about route
router.get( '/about', function ( req, res ) {
    res.send( 'About birds' )
} )

module.exports = router
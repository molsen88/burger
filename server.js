var express = require( 'express' );

var PORT = process.env.PORT || 3000;

var app = express();
app.use( express.static( 'public' ) );
var exphbs = require( 'express-handlebars' );
// console.log( app )

app.engine( 'handlebars', exphbs( {
    defaultLayout: 'main'
} ) );
app.set( 'view engine', 'handlebars' );

var routes = require( './controllers/burgers_controller' )
console.log( routes )
// var js = require( "./public/assets/js/burgerfunction.js" )

// function logger( request, response, next ) {
//     console.log( 'this is our middleware running' )
//     next()
// }

// app.use( logger )
app.use( routes )




app.listen( PORT, function () {
    console.log( "Server is running on PORT: " + PORT )
} )
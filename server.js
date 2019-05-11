var express = require( 'express' );

var PORT = process.env.PORT || 3000;

var app = express();
var exphbs = require( 'express-handlebars' );
// console.log( app )

app.engine( 'handlebars', exphbs( {
    defaultLayout: 'main'
} ) );
app.set( 'view engine', 'handlebars' );

var routes = require( './controllers/burgers_controller' )
console.log( routes )

// function logger( request, response, next ) {
//     console.log( 'this is our middleware running' )
//     next()
// }

// app.use( logger )
app.use( routes )



app.listen( PORT, function () {
    console.log( "Server is running on PORT: " + PORT )
} )
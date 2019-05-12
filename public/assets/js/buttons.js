console.log( "yo" )

$( document ).on( 'click', '.addBurger', function ( event ) {
    event.preventDefault();
    console.log( 'You clicked update' )

} )


$( document ).on( 'click', '.delete', function ( event ) {
    event.preventDefault();
    console.log( 'You clicked delete' )

} )

// module.export = burgerfunctions;
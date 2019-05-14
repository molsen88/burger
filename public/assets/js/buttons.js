

$( document ).on( "click", "#addBurger", function ( event ) {
    event.preventDefault();
    console.log( "You clicked add burger" )
    $.ajax( {
        url: "/api/burgers",
        method: "POST",
        data: {
            burgers: $( "#new-burger" ).val().trim()
        }

    } ).then( function ( serverResponse ) {
        console.log( serverResponse, "This is the response from the server" )

    } )
    location.reload();

} )


$( document ).on( "click", ".eaten", function ( event ) {
    event.preventDefault();
    console.log( "You ate the burger" )
    var id = $( this ).attr( "data-id" )
    console.log( id )
    $.ajax( {
        url: "/api/burgers/" + id,
        method: "PUT",
        data: {
            burgers: $( "#new-burger" ).val().trim()

        }

    } ).then( function ( serverResponse ) {
        console.log( serverResponse, "This is the response from the server" )
    } )

} )


$( document ).on( 'click', '.delete', function ( event ) {
    event.preventDefault();
    console.log( 'You clicked delete' )

} )


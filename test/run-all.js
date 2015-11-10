window.require.list()
  .filter( function ( name ) {return /\.test$/.test( name );} )
  .forEach( function ( file ) { require( file ); } );

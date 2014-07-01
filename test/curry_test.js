var test = require( 'tape' );
var curry = require( '../' );

function add( a, b ) {
    return a + b;
}

function sum() {
    var args = [].slice.call( arguments, 0 );
    return args.reduce( add );
}

sum.curry = curry;

function sumThis() {
    var args = [].slice.call( arguments, 0 );
    return args.reduce( add, this );
}

sumThis.curry = curry;

test( 'curry', function ( t ) {
    t.plan( 10 );

    t.equal( sum( 1, 2, 3 ), 6, 'variadic sum works as expected' );
    t.equal( typeof sum.curry( 1 ), 'function', 'curry returns a function' );
    t.equal( sum.curry( 1 )(), 1, 'executing a curried function returns' );
    t.equal( sum.curry( 1 ).curry( 2 ).curry( 3 )(), 6, 'curry can chain' );

    t.equal( curry.call( sum, 1 )(), 1, 'curry works with the call pattern' );
    t.equal( curry.call( sum, 1 ).curry( 2 ).curry( 3 )( 4 ), 10, 'curry can chain with the call pattern' );
    t.equal( curry.apply( sum, [1] )( 2 ), 3, 'curry works with the apply pattern' );
    t.equal( curry.apply( sum, [1] ).curry( 2 )( 3 ), 6, 'curry can chain with the apply pattern' );

    t.equal( sumThis.apply( 1, [2, 3] ), 6, 'variadic sumThis works as expected' );
    t.equal( sumThis.curry( 1 ).curry( 2 ).apply( 3, [4] ), 10, 'curried.apply uses the supplied context' );
} );
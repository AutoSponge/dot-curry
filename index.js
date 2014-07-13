/**
 * non-intrusive, chainable curry function
 * @param arg
 * @returns {function} curried
 * @example fn.curry = curry;
 *          fn.curry( a ).curry( b )( c ); // => fn( a, b, c );
 */
module.exports = function curry( arg ) {
    'use strict';
    var fn = this;
    function curried() {
        var args = [arg];
        args.push.apply( args, arguments );
        /*jshint validthis:true */
        return fn.apply( this, args );
    }
    curried.curry = curry;
    curried.uncurry = function uncurry() {
        return fn;
    };
    return curried;
};
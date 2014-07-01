[![Build Status](https://travis-ci.org/AutoSponge/dot-curry.svg?branch=master)](https://travis-ci.org/AutoSponge/dot-curry)

dot-curry
=========

non-intrusive, chainable curry function

## Getting Started

Install it to your project:

`npm install --save dot-curry`

Require it in your file:

`var curry = require( 'dot-curry' );`

Add the curry method to a function you wish to curry:

```javascript
function f( a, b, c ) {
  return a ? b : c;
}

f.curry = curry;
```

Use the curry method when needed:
 
```javascript
f( 0, 1, 2); // 2
f.curry( 0 )( 1, 2 ); // 2
f.curry( 0 ).curry( 1 )( 2 ); // 2
f.curry( 0 ).curry( 1 ).curry( 2 )(); // 2

var f0 = f.curry( 0 );
f0( 1, 2 ); // 2
```
[![Build Status](https://travis-ci.org/AutoSponge/dot-curry.svg?branch=master)](https://travis-ci.org/AutoSponge/dot-curry)
[![Code Climate](https://codeclimate.com/repos/54cc45bee30ba07e1d007b26/badges/d6b07dd6b940c778662e/gpa.svg)](https://codeclimate.com/repos/54cc45bee30ba07e1d007b26/feed)
[![Test Coverage](https://codeclimate.com/repos/54cc45bee30ba07e1d007b26/badges/d6b07dd6b940c778662e/coverage.svg)](https://codeclimate.com/repos/54cc45bee30ba07e1d007b26/feed)

[![browser support](https://ci.testling.com/AutoSponge/dot-curry.png)](http://ci.testling.com/AutoSponge/dot-curry)

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

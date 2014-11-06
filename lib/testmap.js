'use strict';
require('es6-shim');

var m = new Map();
m.set('foo', 'foomapped');
console.log('size: %d', m.size);

var k;
for(k of m.keys()) {
    console.log('got key', k);
}

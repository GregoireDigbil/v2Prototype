'use strict';

require('es6-shim');

let foo = 'foo';

let o1 = {bar: 'bar', baz: 'baz'};

let {qux} = {qux: 'qux'};

var a = [for (i of Array.apply(0, Array(10)).map((x,idx) => idx)) i];

console.log(a);

// testing es6 shim below

var map = new Map();
map.set('bar', 'barmapped');

var e;
for(e of map.keys()) {
    console.log('key: ', e);
}

console.log('values of the map:', Array.from(map.values()));

// function({foo = 'foo}) {
//     return 'foo'+foo;
// }

// console.log(Array.from);
// console.log(Object.assign);
//
// var oDefault = {bar: 'barbar'};
// console.log(Object.assign({qux: 'quuux'}, o1, oDefault));

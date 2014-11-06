Prototype to test a few ideas.

## ES6
With `6to5` and the [es6-shim](https://github.com/paulmillr/es6-shim) it's
possible to write es6 javascript today \o/.
This requires `node 0.11` with `--harmony` flag. Since some of es6 features
are already supported (`let`, `generators`, `iterators`) they are not
transpiled.

For the moment, there is [a bug](https://github.com/node-inspector/node-inspector/issues/401)
with sourcemap support in node inspector.

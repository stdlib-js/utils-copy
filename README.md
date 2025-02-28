<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Copy

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Copy or deep clone a value to an arbitrary depth.

<section class="installation">

## Installation

```bash
npm install @stdlib/utils-copy
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var copy = require( '@stdlib/utils-copy' );
```

#### copy( value\[, level] )

Copies or deep clones an input `value` to an arbitrary depth. The function accepts both `objects` and `primitives`.

```javascript
// Primitives...
var out = copy( 'beep' );
// returns 'beep'

// Objects...
var value = [
    {
        'a': 1,
        'b': true,
        'c': [ 1, 2, 3 ]
    }
];
out = copy( value );
// returns [ { 'a': 1, 'b': true, 'c': [ 1, 2, 3 ] } ]

var bool = ( value[0].c === out[0].c );
// returns false

// Error object...
var err1 = new TypeError( 'beep' );

var err2 = copy( err1 );
// returns <TypeError>
```

The default behavior returns a **full** deep copy of any `object`. To limit the copy depth, set the `level` option.

```javascript
var value = [
    {
        'a': 1,
        'b': true,
        'c': [ 1, 2, 3 ]
    }
];

// Trivial case => return the same reference
var out = copy( value, 0 );
// returns [ { 'a': 1, 'b': true, 'c': [ 1, 2, 3 ] } ]

var bool = ( value[0] === out[0] );
// returns true

// Shallow copy:
out = copy( value, 1 );

bool = ( value === out );
// returns false

bool = ( value[0] === out[0] );
// returns true

// Deep copy:
out = copy( value, 2 );

bool = ( value[0] === out[0] );
// returns false

bool = ( value[0].c === out[0].c );
// returns true
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   List of **supported** values/types:

    -   `undefined`
    -   `null`
    -   `boolean`/`Boolean`
    -   `string`/`String`
    -   `number`/`Number`
    -   `function`
    -   `Object`
    -   `Date`
    -   `RegExp`
    -   `Set`
    -   `Map`
    -   [`Error`][mdn-error]
    -   [`URIError`][mdn-uri-error]
    -   [`ReferenceError`][mdn-reference-error]
    -   [`SyntaxError`][mdn-syntax-error]
    -   [`RangeError`][mdn-range-error]
    -   [`EvalError`][mdn-eval-error]
    -   [`TypeError`][mdn-type-error]
    -   [`System Error`][node-system-error] (Node.js)
    -   `Array`
    -   `Int8Array`
    -   `Uint8Array`
    -   `Uint8ClampedArray`
    -   `Init16Array`
    -   `Uint16Array`
    -   `Int32Array`
    -   `Uint32Array`
    -   `Float32Array`
    -   `Float64Array`
    -   `Buffer` ([Node.js][node-buffer])

-   List of **unsupported** values/types:

    -   `DOMElement`: to copy DOM elements, use `element.cloneNode()`.
    -   `Symbol`
    -   `WeakMap`
    -   `WeakSet`
    -   `Blob`
    -   `File`
    -   `FileList`
    -   `ImageData`
    -   `ImageBitmap`
    -   `ArrayBuffer`

-   The implementation **can** handle circular references.

-   If a `Number`, `String`, or `Boolean` object is encountered, the value is cloned as a **primitive**. This behavior is intentional. The implementation is opinionated in wanting to **avoid** creating `numbers`, `strings`, and `booleans` via the `new` operator and a constructor.

-   For `objects`, the implementation **only** copies `enumerable` keys and their associated property descriptors.

-   The implementation **only** checks whether basic `Objects`, `Arrays`, and class instances are `extensible`, `sealed`, and/or `frozen`.

-   `functions` are **not** cloned; their reference is copied.

-   The implementation supports custom [`error`][mdn-error] types which are [`Error`][mdn-error] instances (e.g., ES2015 subclasses).

-   Support for copying class instances is inherently **fragile**. Any instances with privileged access to variables (e.g., within closures) cannot be cloned. This stated, basic copying of class instances is supported. Provided an environment which supports ES5, the implementation is greedy and performs a deep clone of any arbitrary class instance and its properties. The implementation assumes that the concept of `level` applies only to the class instance reference, but not to its internal state.

    <!-- eslint-disable no-underscore-dangle -->

    ```javascript
    function Foo() {
        this._data = [ 1, 2, 3, 4 ];
        this._name = 'bar';
        return this;
    }

    var foo1 = new Foo();
    var foo2 = copy( foo1 );

    var bool = ( foo1._name === foo2._name );
    // returns true

    bool = ( foo1._data === foo2._data );
    // returns false

    bool = ( foo1._data[0] === foo2._data[0] );
    // returns true
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var Int32Array = require( '@stdlib/array-int32' );
var copy = require( '@stdlib/utils-copy' );

var arr = [
    {
        'x': new Date(),
        'y': [ randu(), randu() ],
        'z': new Int32Array( [ 1, 2, 3, 4 ] ),
        'label': 'Beep'
    },
    {
        'x': new Date(),
        'y': [ randu(), randu() ],
        'z': new Int32Array( [ 3, 1, 2, 4 ] ),
        'label': 'Boop'
    }
];

// Perform a full deep copy:
var out = copy( arr );

var bool = ( arr[ 0 ] === out[ 0 ] );
// returns false

bool = ( arr[ 1 ].y === out[ 1 ].y );
// returns false

// Perform a shallow copy:
out = copy( arr, 1 );

bool = ( arr[ 0 ] === out[ 0 ] );
// returns true

bool = ( arr[ 1 ].z === out[ 1 ].z );
// returns true
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils-merge`][@stdlib/utils/merge]</span><span class="delimiter">: </span><span class="description">merge and extend objects.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-copy.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-copy

[test-image]: https://github.com/stdlib-js/utils-copy/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/utils-copy/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-copy/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-copy?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-copy.svg
[dependencies-url]: https://david-dm.org/stdlib-js/utils-copy/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/utils-copy/tree/deno
[deno-readme]: https://github.com/stdlib-js/utils-copy/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/utils-copy/tree/umd
[umd-readme]: https://github.com/stdlib-js/utils-copy/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/utils-copy/tree/esm
[esm-readme]: https://github.com/stdlib-js/utils-copy/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/utils-copy/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-copy/main/LICENSE

[mdn-error]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error

[mdn-type-error]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError

[mdn-syntax-error]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError

[mdn-range-error]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RangeError

[mdn-reference-error]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError

[mdn-uri-error]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/URIError

[mdn-eval-error]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/EvalError

[node-system-error]: https://nodejs.org/api/errors.html#errors_class_system_error

[node-buffer]: http://nodejs.org/api/buffer.html

<!-- <related-links> -->

[@stdlib/utils/merge]: https://github.com/stdlib-js/utils-merge

<!-- </related-links> -->

</section>

<!-- /.links -->

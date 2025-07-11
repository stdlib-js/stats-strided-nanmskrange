<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

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

# nanmskrange

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Calculate the [range][range] of a strided array according to a mask, ignoring `NaN` values.

<section class="intro">

The [**range**][range] is defined as the difference between the maximum and minimum values.

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-strided-nanmskrange
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
var nanmskrange = require( '@stdlib/stats-strided-nanmskrange' );
```

#### nanmskrange( N, x, strideX, mask, strideMask )

Computes the [range][range] of a strided array `x` according to a `mask`, ignoring `NaN` values.

```javascript
var x = [ 1.0, -2.0, 4.0, 2.0, NaN, NaN ];
var mask = [ 0, 0, 1, 0, 0, 0 ];

var v = nanmskrange( 6, x, 1, mask, 1 );
// returns 4.0
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **x**: input [`Array`][mdn-array] or [`typed array`][mdn-typed-array].
-   **strideX**: stride length for `x`.
-   **mask**: mask [`Array`][mdn-array] or [`typed array`][mdn-typed-array]. If a `mask` array element is `0`, the corresponding element in `x` is considered valid and **included** in computation. If a `mask` array element is `1`, the corresponding element in `x` is considered invalid/missing and **excluded** from computation.
-   **strideMask**: stride length for `mask`.

The `N` and stride parameters determine which elements in the strided arrays are accessed at runtime. For example, to compute the [range][range] of every other element in `x`,

```javascript
var x = [ 1.0, 2.0, -7.0, -2.0, 4.0, 3.0, 5.0, 6.0 ];
var mask = [ 0, 0, 0, 0, 0, 0, 1, 1 ];

var v = nanmskrange( 4, x, 2, mask, 2 );
// returns 11.0
```

Note that indexing is relative to the first index. To introduce offsets, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments, max-len -->

```javascript
var Float64Array = require( '@stdlib/array-float64' );
var Uint8Array = require( '@stdlib/array-uint8' );

var x0 = new Float64Array( [ 2.0, 1.0, -2.0, -2.0, 3.0, 4.0, 5.0, 6.0, NaN, NaN ] );
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

var mask0 = new Uint8Array( [ 0, 0, 0, 0, 0, 0, 1, 1, 0, 0 ] );
var mask1 = new Uint8Array( mask0.buffer, mask0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

var v = nanmskrange( 5, x1, 2, mask1, 2 );
// returns 6.0
```

#### nanmskrange.ndarray( N, x, strideX, offsetX, mask, strideMask, offsetMask )

Computes the [range][range] of a strided array according to a `mask`, ignoring `NaN` values and using alternative indexing semantics.

```javascript
var x = [ 1.0, -2.0, 4.0, 2.0, NaN, NaN ];
var mask = [ 0, 0, 1, 0, 0, 0 ];

var v = nanmskrange.ndarray( 6, x, 1, 0, mask, 1, 0 );
// returns 4.0
```

The function has the following additional parameters:

-   **offsetX**: starting index for `x`.
-   **offsetMask**: starting index for `mask`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameters support indexing semantics based on a starting indices. For example, to calculate the [range][range] for every other value in `x` starting from the second value

```javascript
var x = [ 2.0, 1.0, -2.0, -2.0, 3.0, 4.0, 5.0, 6.0 ];
var mask = [ 0, 0, 0, 0, 0, 0, 1, 1 ];

var v = nanmskrange.ndarray( 4, x, 2, 1, mask, 2, 1 );
// returns 6.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return `NaN`.
-   Both functions support array-like objects having getter and setter accessors for array element access (e.g., [`@stdlib/array-base/accessor`][@stdlib/array/base/accessor]).
-   Depending on the environment, the typed versions ([`dnanmskrange`][@stdlib/stats/strided/dnanmskrange], [`snanmskrange`][@stdlib/stats/strided/snanmskrange], etc.) are likely to be significantly more performant.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var uniform = require( '@stdlib/random-base-uniform' );
var bernoulli = require( '@stdlib/random-base-bernoulli' );
var filledarrayBy = require( '@stdlib/array-filled-by' );
var nanmskrange = require( '@stdlib/stats-strided-nanmskrange' );

function rand() {
    if ( bernoulli( 0.8 ) < 1 ) {
        return NaN;
    }
    return uniform( -50.0, 50.0 );
}

var x = filledarrayBy( 10, 'float64', rand );
console.log( x );

var mask = filledarrayBy( x.length, 'uint8', bernoulli.factory( 0.2 ) );
console.log( mask );

var v = nanmskrange( x.length, x, 1, mask, 1 );
console.log( v );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/stats-strided/dnanmskrange`][@stdlib/stats/strided/dnanmskrange]</span><span class="delimiter">: </span><span class="description">calculate the range of a double-precision floating-point strided array according to a mask, ignoring NaN values.</span>
-   <span class="package-name">[`@stdlib/stats-strided/mskrange`][@stdlib/stats/strided/mskrange]</span><span class="delimiter">: </span><span class="description">calculate the range of a strided array according to a mask.</span>
-   <span class="package-name">[`@stdlib/stats-strided/nanrange`][@stdlib/stats/strided/nanrange]</span><span class="delimiter">: </span><span class="description">calculate the range of a strided array, ignoring NaN values.</span>
-   <span class="package-name">[`@stdlib/stats-strided/nanmskmax`][@stdlib/stats/strided/nanmskmax]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a strided array according to a mask, ignoring NaN values.</span>
-   <span class="package-name">[`@stdlib/stats-strided/nanmskmin`][@stdlib/stats/strided/nanmskmin]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of a strided array according to a mask, ignoring NaN values.</span>
-   <span class="package-name">[`@stdlib/stats-strided/snanmskrange`][@stdlib/stats/strided/snanmskrange]</span><span class="delimiter">: </span><span class="description">calculate the range of a single-precision floating-point strided array according to a mask, ignoring NaN values.</span>

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

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-strided-nanmskrange.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-strided-nanmskrange

[test-image]: https://github.com/stdlib-js/stats-strided-nanmskrange/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-strided-nanmskrange/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-strided-nanmskrange/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-strided-nanmskrange?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-strided-nanmskrange.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-strided-nanmskrange/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-strided-nanmskrange/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-strided-nanmskrange/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-strided-nanmskrange/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-strided-nanmskrange/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-strided-nanmskrange/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-strided-nanmskrange/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-strided-nanmskrange/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-strided-nanmskrange/main/LICENSE

[range]: https://en.wikipedia.org/wiki/Range_%28statistics%29

[mdn-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@stdlib/array/base/accessor]: https://github.com/stdlib-js/array-base-accessor

<!-- <related-links> -->

[@stdlib/stats/strided/dnanmskrange]: https://github.com/stdlib-js/stats-strided-dnanmskrange

[@stdlib/stats/strided/mskrange]: https://github.com/stdlib-js/stats-strided-mskrange

[@stdlib/stats/strided/nanrange]: https://github.com/stdlib-js/stats-strided-nanrange

[@stdlib/stats/strided/nanmskmax]: https://github.com/stdlib-js/stats-strided-nanmskmax

[@stdlib/stats/strided/nanmskmin]: https://github.com/stdlib-js/stats-strided-nanmskmin

[@stdlib/stats/strided/snanmskrange]: https://github.com/stdlib-js/stats-strided-snanmskrange

<!-- </related-links> -->

</section>

<!-- /.links -->

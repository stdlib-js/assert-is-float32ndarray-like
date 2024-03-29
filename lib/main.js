/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var isndarrayLike = require( '@stdlib/assert-is-ndarray-like' );


// MAIN //

/**
* Tests if a value is an ndarray-like object whose underlying data type is `float32`.
*
* @param {*} v - value to test
* @returns {boolean} boolean indicating if a value is an ndarray-like object whose underlying data type is `float32`
*
* @example
* var Float32Array = require( '@stdlib/array-float32' );
* var ndarray = require( '@stdlib/ndarray-ctor' );
*
* var buffer = new Float32Array( [ 0, 0, 0, 0 ] );
* var arr = ndarray( 'float32', buffer, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );
*
* var bool = isFloat32ndarrayLike( arr );
* // returns true
*
* bool = isFloat32ndarrayLike( [] );
* // returns false
*/
function isFloat32ndarrayLike( v ) {
	return ( isndarrayLike( v ) && v.dtype === 'float32' );
}


// EXPORTS //

module.exports = isFloat32ndarrayLike;

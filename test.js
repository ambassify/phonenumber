/* eslint-disable */

'use strict';

const assert = require('assert');
const normalize = require('./normalize');
const validate = require('./validate');

const valid_numbers = [
    '+32498616149',
    '+32 498 61 61 49'
];

const invalid_numbers = [
    '013532281',
    'foo',
    '013532281',
    '013/53.22.81'
];

valid_numbers.forEach(n => assert(validate(n), `${n} is valid`));
valid_numbers.forEach(n => assert(normalize(n) !== false, `${n} can be normalized`));

invalid_numbers.forEach(n => assert(!validate(n), `${n} is invalid`));
invalid_numbers.forEach(n => assert(normalize(n) === false, `${n} cannot be normalized`));

console.log('All tests passed.');

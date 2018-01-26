'use strict';

var libPhone = require('libphonenumber-js');

module.exports = function validate(number) {
    return typeof number === 'string' && libPhone.isValidNumber(number);
};

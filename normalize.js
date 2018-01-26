'use strict';

var libPhone = require('libphonenumber-js');

module.exports = function normalize(number) {
    var normalized = String(number)
        .trim()
        .toUpperCase()
        .replace(/^00/, '+');

    normalized = libPhone.parse(normalized);

    if (normalized && normalized.country)
        return libPhone.format(normalized, 'E.164');

    return false;
};

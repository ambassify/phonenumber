# @ambassify/phonenumber

Phonenumber utilities.

__Note__: At this moment, it is a wrapper around [libphonenumber-js](https://www.npmjs.com/package/libphonenumber-js). Why?

- to make it easier to validate and normalize phonenumbers in the same way across our projects
- to make it easier to migrate to a more compact package than libphonenumber-js in the future
- because it would take too much time to create a more compact package at this time

## `@ambassify/phonenumber/normalize`

Exports a normalize function. It takes one argument, the number to normalize, and returns a new normalized number if possible and `false` otherwise.

## `@ambassify/phonenumber/validate`

Exports a validation function. It takes one argument, the number to validate, and returns a boolean that indicates whether or not the number is valid.

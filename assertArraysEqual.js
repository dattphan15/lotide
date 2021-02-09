// FUNCTION IMPLEMENTATION
const eqArrays = require('../eqArrays');

const assertArraysEqual = function(actual, expected) {
  let output = "";

  if (eqArrays(actual, expected)) {
    output = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  } else {
    output = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  } 
  console.log(output);
};

// EXPORT
module.exports = assertArraysEqual;
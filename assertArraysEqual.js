// FUNCTION IMPLEMENTATION
const eqArrays = function(arr1, arr2) {

  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
  } else {
    return false;
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  let output = "";

  if (eqArrays(actual, expected)) {
    output = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  } else if (!eqArrays(actual, expected)) {
    output = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  } 
  console.log(output);
};

assertArraysEqual([1,2,3], [1,2,3]);
assertArraysEqual([1,2,4], [1,2,3]);
assertArraysEqual([1,2,5], [1,2,3]);


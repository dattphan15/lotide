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

const without = function(source, itemsToRemove) {
  let sourceArray = [];
  for (let x = 0; x < source.length; x++) {
    if (!itemsToRemove.includes(source[x])) {
      sourceArray.push(source[x]);
    }
  }
  return sourceArray;
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

// TEST CASE 1
// Make sure the original array was not altered by the without function
const numbersOriginal = [1, 2, 3];
assertArraysEqual(numbersOriginal, without(numbersOriginal, [1,3]));

// TEST CASE 2
const words = ["hello", "world", "lighthouse"];
assertArraysEqual(words, without(words, "world")); // no need to capture return value for this test case
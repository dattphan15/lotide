// TEST/ASSERTION FUNCTIONS
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

// ACTUAL FUNCTION
const middle = function(array) {
  let output = [];
  const index = Math.floor(array.length / 2); // middle index
  if (array.length > 2) {
    if (array.length % 2 === 0) { // checks if array is even
      output.push(array[index-1]); // returns first middle element
      output.push(array[index]); // returns second middle element
    } else {
        output.push(array[index]);
    }
  }
    return output; // if array.length < 2, returns empty array // if array.length > 2, returns array elements
};

// TEST CASES
assertArraysEqual(middle([1,2,3,4]), [2, 3]); // PASS
assertArraysEqual(middle([1,2,3,4,5]), [2, 3]); // FAIL
assertArraysEqual(middle([1,2,3,4,5,6]), [3, 4]); // PASS
assertArraysEqual(middle([1,2,3,4,5,6]), [2, 3]); // FAIL
assertArraysEqual(middle([1,2]), []); // PASS
assertArraysEqual(middle([1]), []); // PASS
assertArraysEqual(middle([]), []);  // PASS

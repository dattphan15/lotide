// PREVIOUS FUNCTIONS
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
   } else {
     output = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
   } 
   console.log(output);
 };


// NEW FUNCTION IMPLEMENTATION
const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === " ") {
      null;
    } else if (results[sentence[i]]) {
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [i];
    }
  }
  return results;
};

// TEST CASES
console.log(letterPositions("lighthouse in the house"));

assertArraysEqual(letterPositions("hello").e, [1]); // PASS
assertArraysEqual(letterPositions("hello").e, [2]); // FAIL
assertArraysEqual(letterPositions("hello").l, [1]); // FAIL
assertArraysEqual(letterPositions("hello").l, [2, 3]); // PASS



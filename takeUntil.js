// ASSERT TEST
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


// NEW FUNCTION
const takeUntil = function(array, callback) {
  const newArray = [];

  for (const element of array) { // for each element in the array
    if (!callback(element)) { // if it DOESNT match the callback function element
      newArray.push(element); // push element to new array
    } else {
      return newArray;
    }
  }
  return newArray;
};


// EXPECTED INPUT
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(results1, [1, 2, 5, 7, 2]);
assertArraysEqual(results1, [3, 3, 3, 3, 3]);
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);


// EXPECTED OUTPUT
// [ 1, 2, 5, 7, 2 ]
// ---
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]
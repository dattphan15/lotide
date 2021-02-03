// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  let output = "";

  if (actual === expected) {
    output = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  } else if (actual !== expected) {
    output = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  } return output;
};

const eqArrays = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) {
      return true;
    } else false;
  }
}

console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)); // => should PASS
console.log(assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false)); // => should FAIL
console.log(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true)); // => should PASS
console.log(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false)); // => should FAIL

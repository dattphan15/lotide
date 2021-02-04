// ASSERT EQUAL FUNCTION
const assertEqual = function(actual, expected) {
  let output = "";

  if (actual === expected) {
    output = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  } else if (actual !== expected) {
    output = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  } console.log(output);
};

// NEW IMPLEMENTATION
const findKeyByValue = function(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}

// TEST CASES
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"); // PASS
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "comedy"); // FAIL
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined); // PASS

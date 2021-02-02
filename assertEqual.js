// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  let condition = actual === expected;
  if (condition) {
    console.log("✅✅✅ Assertion Passed: " + actual + " === " + expected);
  } else console.log("🛑🛑🛑 Assertion Failed: " + actual + " !== " + expected);
};

// TEST CODE
assertEqual("Lighthouse", "Bootcamp");
assertEqual(1, 1);

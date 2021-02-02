const assertEqual = function(actual, expected) {
  let output = "";

  if (actual === expected) {
    output = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
    console.log(output);
  } else if (actual !== expected) {
    output = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
    console.log(output);
  } return output;
};

const tail = (arr) => {
  let tails = [];
  for (let i = 1; i < arr.length; i++) {
    tails.push(arr[i]);
  }
  return tails;
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
const varStr = ["Lighthouse", "Labs"];
for (let x = 0; x < result.length; x++) {
  assertEqual(result[x], varStr[x]);
}
//assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 4); // original array should still have 3 elements!
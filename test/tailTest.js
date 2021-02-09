const assert = require('chai').assert
const tail = require('../tail');

describe("#tail", () => {
  it("returns 3 for [1, 2, 3]", () => {
    assert.strictEqual(tail([1, 2, 3]), 3);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(tail(['5']), '5'); 
  });
});



// previous below

// const result = tail(["Hello", "Lighthouse", "Labs"]);
// const varStr = ["Lighthouse", "Labs"];
// for (let x = 0; x < result.length; x++) {
//   assert.deepEqual(result[x], varStr[x]);
// }
// assert.deepEqual(result, ["Lighthouse", "Labs"]); // => will always fail!

// // Test Case: Check the original array
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 4); // original array should still have 3 elements!

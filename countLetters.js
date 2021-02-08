const assertEqual = function(actual, expected) {
  let output = "";

  if (actual === expected) {
    output = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  } else {
    output = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  } console.log(output);
};

const countLetters = function(str1) {
  const results = {};

  for (const letter of str1) {
    if (letter !== " "){
    if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  }
}
  return results;
};

console.log(countLetters("lighthouse in the house"));
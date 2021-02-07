// ASSERT FUNCTION
const assertEqual = function(actual, expected) {
  let output = "";

  if (actual === expected) {
    output = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  } else {
    output = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  } 
  console.log(output);
};

// EQARRAYS FUNCTION
const eqArrays = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) {
      return true;
    } else false;
  }
};

// FUNCTION IMPLEMENTATION
const eqObjects = function(object1, object2) {
  const objOneKeys = Object.keys(object1);
  let objOneValues = Object.values(object1); let sortedOne = objOneValues.sort();

  const objTwoKeys = Object.keys(object2);
  let objTwoValues = Object.values(object2); let sortedTwo = objTwoValues.sort();

  let result = false;

  if (Array.isArray(objOneValues) && Array.isArray(objTwoValues)) { // if object values being compared are arrays
    // console.log("Both values are arrays");
    
    eqArrays(objOneValues, objTwoValues);

      if (JSON.stringify(sortedOne) == JSON.stringify(sortedTwo)) {
        // console.log("The values in each object key matches");
        result = true;
      }
  } else {
    result = false;
  }
  return result;
};


// TEST CASES
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false
assertEqual(eqObjects(ab, abc), false); // => false


// TEST CASES; ARRAYS AS VALUES
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true
assertEqual(eqObjects(cd, dc), true); // => true


const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false
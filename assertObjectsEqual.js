// EQARRAYS FUNCTION
const eqArrays = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) {
      return true;
    } else false;
  }
};

// EQOBJECTS FUNCTION
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


// NEW IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  let output = "";

  if (eqObjects(actual, expected)) { // if objects are the same
    output = `✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`;
  } else {
    output = `🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;
  } 
  console.log(output);
};



// DEFINING OBJECTS
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

// TEST CASES
assertObjectsEqual(ab, ba);
assertObjectsEqual(ab, abc);
assertObjectsEqual(cd, dc);

// eqObjects(ab, ba); // => true
// eqObjects(ab, abc); // => false
// eqObjects(cd, dc); // => true

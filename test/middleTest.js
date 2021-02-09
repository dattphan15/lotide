const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

// TEST CASES
assertArraysEqual(middle([1,2,3,4]), [2, 3]); // PASS
assertArraysEqual(middle([1,2,3,4,5]), [2, 3]); // FAIL
assertArraysEqual(middle([1,2,3,4,5,6]), [3, 4]); // PASS
assertArraysEqual(middle([1,2,3,4,5,6]), [2, 3]); // FAIL
assertArraysEqual(middle([1,2]), []); // PASS
assertArraysEqual(middle([1]), []); // PASS
assertArraysEqual(middle([]), []);  // PASS
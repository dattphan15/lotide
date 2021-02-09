const assertArraysEqual = require('../assertArraysEqual');

// TEST
assertArraysEqual([1,2,3], [1,2,3]);
assertArraysEqual([1,2,4], [1,2,3]);
assertArraysEqual([1,2,5], [1,2,3]);
// ACTUAL FUNCTION
const middle = function(array) {
  let output = [];
  const index = Math.floor(array.length / 2); // middle index
  if (array.length > 2) {
    if (array.length % 2 === 0) { // checks if array is even
      output.push(array[index-1]); // returns first middle element
      output.push(array[index]); // returns second middle element
    } else {
        output.push(array[index]);
    }
  }
    return output; // if array.length < 2, returns empty array // if array.length > 2, returns array elements
};

// EXPORT
module.exports = middle;



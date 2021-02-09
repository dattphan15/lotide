const tail = (arr) => {
  let output = arr[0];
  let lastIndex = arr.length-1;
  
  if (arr.length > 0) {
    output = arr[lastIndex];
  }
  return output;
};

// EXPORT
module.exports = tail;
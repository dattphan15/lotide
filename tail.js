const tail = (arr) => {
  let tails = [];
  for (let i = 1; i < arr.length; i++) {
    tails.push(arr[i]);
  }
  return tails;
};

// EXPORT
module.exports = tail;
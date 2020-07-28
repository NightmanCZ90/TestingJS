module.exports = {
  forEach(arr, fn) {
    // for (let i = 0; i < arr.length; i++) { // to test wether the function works in an automated fassion?
    //   const value = arr[i];
    //   fn(value, i);
    // }

    for (let index in arr) {
      fn(arr[index], index);
    }
  },

  map(arr, fn) {
    result = [];
  
    for (let i = 0; i < arr.length; i++) {
      result.push(fn(arr[i], i));
    }
    return result;
  }
};

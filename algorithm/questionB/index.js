/**
 * @params {array[]} arr
 */

var findFrequent = (arr) => {
  // create maxAppearance array to compare the appearance of each iterated elements from array
  let maxAppearance = [0, 0];
  // count is used to count the number of occurrences of the element
  let count = 1;
  // reverse iterate array
  for (let i = arr.length - 1; i > 0; i--) {
    if (arr[i] === arr[i - 1]) {
      ++count;
    } else {
      if (maxAppearance[1] < count) {
        maxAppearance[0] = arr[i];
        maxAppearance[1] = count;
      }
      count = 1;
    }
  }
  console.log(maxAppearance[0]);
}

findFrequent([3, 7, 3]);
findFrequent([null, "hello", true, null]);
findFrequent([false, "up", "down", "left", "right", true, false]);
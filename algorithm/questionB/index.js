/**
 * @params {array[]} arr
 * create a Map to store the appearance of each element in array
 */

var findFrequent = (arr) => {
  // check array null
  if (arr.length == 0) {
    return null;
  }

  // create variable 
  var itemMap = {},
    maxCount = 1,
    items = [];

  // loop into the array
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    // check arr[i] value equivalent with null
    // if yes, return to 1
    // else arr[i] increased
    if (itemMap[element] == null) {
      itemMap[element] = 1;
    } else {
      itemMap[element]++;
    }

    // in loop, assign element to items when it larger than maxCount = 1, and assign maxCount with value of arr[i]
    // if itemMap[element] == maxCount we push element to items[] and assign value to maxCount
    if (itemMap[element] > maxCount) {
      items = [element];
      maxCount = itemMap[element];
    } else if (itemMap[element] == maxCount) {
      items.push(element);
      maxCount = itemMap[element];
    }
  }
  // return to items
  console.log(items);
}

findFrequent([3, 7, 3, 7, 8]);
findFrequent([null, "hello", true, null]);
findFrequent([false, "up", "down", "left", "right", true, false]);
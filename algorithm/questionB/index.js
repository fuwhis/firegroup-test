/**
 * @params {array[]} arr
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

    if (itemMap[element] == null) {
      itemMap[element] = 1;
    } else {
      itemMap[element]++;
    }

    if (itemMap[element] > maxCount) {
      items = [element];
      maxCount = itemMap[element];
    } else if (itemMap[element] == maxCount) {
      items.push(element);
      maxCount = itemMap[element];
    }
  }
  console.log(items);
}
findFrequent([3, 7, 3, 7, 8]);
findFrequent([null, "hello", true, null]);
findFrequent([false, "up", "down", "left", "right", true, false]);
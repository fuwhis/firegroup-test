/**
 * @params {array[]} arr
 */

var findFrequent = (arr) => {
  var count = 1;
  var tmp = 0;
  var item;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; arr.length; j++) {
      if (arr[i] === arr[j])
        tmp++;
      if (count < tmp) {
        count = tmp;
        item = arr[i];
      }
    }
    tmp = 0;
  }
  console.log(item);
}
findFrequent([3, 7, 3, 7, 8]);
//findFrequent([null, "hello", true, null]);
//findFrequent([false, "up", "down", "left", "right", true, false]);
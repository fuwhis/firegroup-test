/**
 * @param {number[]} nums
*/

var findMax5 = function (nums) {
  // sort array in descending order
  console.log('array before sort', nums);
  nums.sort(function (a, b) { return b - a });
  console.log('array after sort', nums);
  // create a temp array
  let largestNums = [];
  // iterator array nums[]
  for (let i = 0; i < nums.length; i++) {
    // stop condition
    if (i < 5) {
      largestNums.push(nums[i]);
    }
  }
  console.log('largest', largestNums);
  return largestNums;
}

findMax5([14, 12, 38, 17, 10, 36, 12, 29, 45, 34, 48, 22]);
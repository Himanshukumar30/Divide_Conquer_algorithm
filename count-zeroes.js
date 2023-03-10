/*
Given an array of 1s and 0s which has all 1s first followed by all 0s, write a function called countZeroes, which returns the number of zeroes in the array.
Constraints:
Time Complexity: O(log N)
*/

function countZeroes(arr) {
  let left = 0;
  let right = arr.length - 1;

  // if the last element is 1, there are no 0s in the array
  if (arr[right] === 1) {
    return 0;
  }

  // find the first occurrence of 0 using binary search
  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === 1) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  // the number of 0s is the total number of elements minus the index of the first occurrence of 0
  return arr.length - left;
}

module.exports = countZeroes;

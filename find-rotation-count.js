/*
Write a function called findRotationCount which accepts an array of distinct numbers sorted in increasing order. 
The array has been rotated counter-clockwise n number of times. Given such an array, find the value of n.
Constraints:
Time Complexity: O(log N)
************************
Examples:
findRotationCount([15, 18, 2, 3, 6, 12]) // 2
findRotationCount([7, 9, 11, 12, 5]) // 4
findRotationCount([7, 9, 11, 12, 15]) // 0
*/

function findRotationCount(arr) {
  pivot = findPivot(arr);
  if (pivot === -1) {
    return 0;
  }
  return pivot;
}

// find the pivot
function findPivot(arr, left = 0, right = arr.length - 1) {
  if (arr[left] <= arr[right]) {
    return -1; // array is not rotated
  }
  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (arr[middle] > arr[middle + 1]) {
      return middle + 1; // pivot found
    } else if (arr[middle] >= arr[left]) {
      left = middle + 1; // pivot is to the right
    } else {
      right = middle - 1; // pivot is to the left
    }
  }
  return -1; // pivot not found
}

module.exports = findRotationCount;

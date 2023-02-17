/*
*Write a function called findRotatedIndex which accepts a rotated array of sorted numbers and an integer. 
The function should return the index of num in the array. If the value is not found, return -1.
Constraints:
Time Complexity: O(log N)
**************
Examples:
findRotatedIndex([3,4,1,2],4) // 1
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8) // 2
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3) // 6
findRotatedIndex([37,44,66,102,10,22],14) // -1
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12) // -1
 */

function findRotatedIndex(arr, n) {
  let pivot = findPivot(arr);

  //   if n is located before pivot
  if (pivot > 0 && n >= arr[0] && n <= arr[pivot - 1]) {
    return binarySearch(arr, n, 0, pivot - 1);
  } else {
    //   if n is located after pivot
    return binarySearch(arr, n, pivot, arr.length - 1);
  }
}

// perform the binary search
function binarySearch(arr, n, left, right) {
  // if n does not exist
  if (n < arr[left] || n > arr[right]) {
    return -1;
  }

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (n > arr[middle]) {
      left = middle + 1;
    } else if (n < arr[middle]) {
      right = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
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

module.exports = findRotatedIndex;

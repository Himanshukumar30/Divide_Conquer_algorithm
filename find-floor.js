/*
Write a function called findFloor which accepts a sorted array and a value x, and returns the floor of x in the array. 
The floor of x in an array is the largest element in the array which is smaller than or equal to x. If the floor does not exist, return -1.
Constraints
Time Complexity: O(log N)
************************
Examples:
findFloor([1,2,8,10,10,12,19], 9) // 8
findFloor([1,2,8,10,10,12,19], 20) // 19
findFloor([1,2,8,10,10,12,19], 0) // -1
*/

function findFloor(arr, n, left = 0, right = arr.length - 1) {
  //if n does not exist
  if (left > right) {
    return -1;
  }
  //   if n is the last element in the array
  if (n >= arr[right]) {
    return arr[right];
  }

  middle = Math.floor((left + right) / 2);

  //   If  n is equal to the middle element
  if (arr[middle] === n) {
    return arr[middle];
  }

  //   If the floor is the next element middle
  if (middle > 0 && n >= arr[middle - 1] && n < arr[middle]) {
    return arr[middle - 1];
  }

  // If the floor is on the left of middle
  if (n < arr[middle]) {
    return findFloor(arr, n, left, middle - 1);
  }

  // If the floor is on the right of middle
  return findFloor(arr, n, middle + 1, right);
}

module.exports = findFloor;

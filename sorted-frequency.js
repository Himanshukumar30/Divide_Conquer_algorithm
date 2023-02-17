/*
Given a sorted array and a number, write a function called sortedFrequency that counts the occurrences of the number in the array
Constraints:
Time Complexity: O(log N)
*/

function sortedFrequency(arr, n) {
  // firstIdx occurrence
  let firstIdx = findFirst(arr, n);

  //   lastIdx occurrence
  let lastIdx = findLast(arr, n);

  //   if number does not exist return -1
  if (firstIdx === -1 || lastIdx === -1) {
    return 0;
  }
  // total number of n
  return lastIdx - firstIdx + 1;
}

// get index of firstIdx occurrence
function findFirst(arr, n, left = 0, right = arr.length - 1) {
  while (left <= right) {
    let middle = Math.floor((left + right) / 2);

    if (arr[middle] === n && (middle === 0 || n > arr[middle - 1])) {
      return middle;
    } else if (arr[middle] < n) {
      return findFirst(arr, n, middle + 1, right);
    } else {
      return findFirst(arr, n, left, middle - 1);
    }
  }
  return -1;
}

// get index of lastIdx occurrence
function findLast(arr, n, left = 0, right = arr.length - 1) {
  if (left <= right) {
    let middle = Math.floor((left + right) / 2);

    if (
      arr[middle] === n &&
      (middle === arr.length - 1 || n < arr[middle + 1])
    ) {
      return middle;
    } else if (arr[middle] > n) {
      return findLast(arr, n, left, middle - 1);
    } else {
      return findLast(arr, n, middle + 1, right);
    }
  }
  return -1;
}

module.exports = sortedFrequency;

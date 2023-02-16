/*
Given a sorted array and a number, write a function called sortedFrequency that counts the occurrences of the number in the array
Constraints:
Time Complexity: O(log N)
*/

function sortedFrequency(arr, n) {
  // first occurrence
  let first = findFirst(arr, n);

  //   last occurrence
  let last = findLast(arr, n);

  //   if number does not exist return -1
  if (first === -1 || last === -1) {
    return 0;
  } else {
    // total number of n
    return last - first + 1;
  }
}

// get index of first occurrence
function findFirst(arr, n) {
  let left = 0;
  let right = arr.length - 1;
  let first = -1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);

    if (arr[middle] === n) {
      first = middle;
      right = middle + 1;
    } else if (arr[middle] < n) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return first;
}

// get index of last occurrence
function findLast(arr, n) {
  let left = 0;
  let right = arr.length - 1;
  let last = -1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);

    if (arr[middle] === n) {
      last = middle;
      left = middle + 1;
    } else if (arr[middle] < n) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return last;
}

module.exports = sortedFrequency;

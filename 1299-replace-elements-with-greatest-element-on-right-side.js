/**
 * Given an array arr, replace every element in that array with the greatest element among
 * the elements to its right, and replace the last element with -1.
 *
 * After doing so, return the array.
 */

const replaceElements = function (arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = Math.max(...arr.slice(i + 1))
  }

  arr.pop()
  arr.push(-1)

  return arr
}

const arr = [17, 18, 5, 4, 6, 1]

console.log(replaceElements(arr)) // Expected: [18,6,6,6,1,-1]

/**
 * Given an integer array nums, return true if any value appears at least twice in the array,
 * and return false if every element is distinct.
 */

const containsDuplicate = function (nums) {
  const set = new Set()

  for (let num of nums) {
    if (set.has(num)) return true

    set.add(num)
  }

  return false
}

const nums = [1, 2, 3, 1]

console.log(containsDuplicate(nums)) // Expected: true

/**
 * Given an array nums of size n, return the majority element.
 * The majority element is the element that appears more than ⌊n / 2⌋ times.
 * You may assume that the majority element always exists in the array.
 *
 * Constrains:
 *      n == nums.length
 */

const majorityElement = function (nums) {
  const set = {}
  let moreRepeated = [0, 0]

  for (let num of nums) {
    if (!set[num]) set[num] = 1
    else set[num] += 1
  }

  for (let pair of Object.entries(set)) {
    if (pair[1] > moreRepeated[1]) moreRepeated = pair
  }

  if (moreRepeated[1] > nums.length / 2) return moreRepeated[0]
}

const nums = [2, 2, 1, 1, 1, 2, 2]

console.log(majorityElement(nums)) // Expected: 2

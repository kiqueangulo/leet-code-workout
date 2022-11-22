/**
 * Given an array of integers nums and an integer target, return indices of the two numbers
 * such that they add up to target.
 *
 * You may assume that each input would have exactly one solution, and you may not use the
 * same element twice.
 *
 * You can return the answer in any order.
 */

const twoSum = function (nums, target) {
  const saver = {}

  for (let i = 0; i < nums.length; i++) {
    const difference = target - nums[i]

    if (saver[difference] !== undefined) return [saver[difference], i]

    saver[nums[i]] = i
  }
}

const nums = [3, 2, 4]
const target = 6

console.log(twoSum(nums, target))

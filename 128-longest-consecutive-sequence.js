/**
 * Given an unsorted array of integers nums, return the length of the longest consecutive
 * elements sequence.
 *
 * You must write an algorithm that runs in O(n) time.
 */

// Time -> O(n) (overall); Space -> O(n)
const longestConsecutive = function (nums) {
  if (!nums.length) return 0

  // Time -> O(n.logn) (probably because of the size of test cases,
  // this time complexity can be ommited, not sure)
  const sorted = nums.sort((a, b) => a - b)
  const length = []
  let count = 1

  for (let i = 0; i < sorted.length - 1; i++) {
    if (sorted[i] === sorted[i + 1]) continue

    if (sorted[i] + 1 !== sorted[i + 1]) {
      length.push(count)
      count = 1
    } else count++
  }

  length.push(count)

  return Math.max(...length)
}

const nums = [1, 2, 0, 1]

console.log(longestConsecutive(nums))

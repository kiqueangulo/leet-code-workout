/**
 * Write a function to find the longest common prefix string amongst an array of strings.
 *
 * If there is no common prefix, return an empty string "".
 *
 * Constrains:
 *      strs[i] consists of only lowercase English letters.
 */

// Time -> O(n.m); Space -> O(n)
const longestCommonPrefix = function (strs) {
  let prefix = ""

  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (strs[0][i] !== strs[j][i]) return prefix
    }

    prefix += strs[0][i]
  }

  return prefix
}

const strs = ["flower", "flow", "flight"]

console.log(longestCommonPrefix(strs))

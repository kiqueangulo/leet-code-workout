/**
 * Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
 *
 * A subsequence of a string is a new string that is formed from the original string by
 * deleting some (can be none) of the characters without disturbing the relative positions
 * of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).
 */

const isSubsequence = function (s, t) {
  if (!s) return true

  const sLastIndex = s.length - 1
  let sIndex = 0

  for (let i = 0; i < t.length; i++) {
    if (s[sIndex] !== t[i]) continue

    if (sIndex === sLastIndex) return true

    sIndex++
  }

  return false
}

const s = "acb"
const t = "ahbgdc"

console.log(isSubsequence(s, t))

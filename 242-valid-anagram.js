/**
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 *
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or
 * phrase, typically using all the original letters exactly once.
 *
 * Constrains:
 *      s and t consist of lowercase English letters.
 */

const isAnagram = function (s = "", t = "") {
  if (s.length !== t.length) return false

  const sSorted = s.split("").sort()
  const tSorted = t.split("").sort()

  for (let index in sSorted) {
    if (sSorted[index] !== tSorted[index]) return false
  }

  return true
}

const s = "anagram"
const t = "nagaram"

console.log(isAnagram(s, t))

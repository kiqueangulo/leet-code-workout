/**
 * Given an array of strings strs, group the anagrams together. You can return the answer in any order.
 *
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
 * typically using all the original letters exactly once.
 *
 * Constrains:
 *      strs[i] consists of lowercase English letters.
 */

const groupAnagrams = function (strs) {
  const sorted = {}

  for (let word of strs) {
    const wordSorted = word.split("").sort().join("")

    if (!sorted[wordSorted]) sorted[wordSorted] = [word]
    else sorted[wordSorted].push(word)
  }

  return Object.values(sorted)
}

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"]

console.log(groupAnagrams(strs))

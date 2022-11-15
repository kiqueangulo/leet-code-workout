/**
 * Given two strings s and t, determine if they are isomorphic.
 * Two strings s and t are isomorphic if the characters in s can be replaced to get t.
 *
 * All occurrences of a character must be replaced with another character while preserving
 * the order of characters. No two characters may map to the same character, but
 * a character may map to itself.
 *
 * Constrains:
 * t.length == s.length
 */

const isIsomorphic = function (s, t) {
  const set = new Set()
  const sLetters = s.split("")
  const tLetters = t.split("")

  for (let index in s) {
    if (!set.has(s[index])) set[s[index]] = t[index]
  }

  for (let index in sLetters) {
    if (t.includes(set[sLetters[index]])) t[index]
  }

  return sLetters.join("")
}

const s = "egg",
  t = "add"

console.log(isIsomorphic(s, t)) // Expected: true

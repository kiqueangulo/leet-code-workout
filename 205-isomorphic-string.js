/**
 * Given two strings s and t, determine if they are isomorphic.
 * Two strings s and t are isomorphic if the characters in s can be replaced to get t.
 *
 * All occurrences of a character must be replaced with another character while preserving
 * the order of characters. No two characters may map to the same character, but
 * a character may map to itself.
 *
 * Constrains:
 *    t.length == s.length
 */

const isIsomorphic = function (s, t) {
  const sLetters = s.split("")
  const tLetters = t.split("")
  const setS = new Set(sLetters)
  const setT = new Set(tLetters)

  if (setT.size < setS.size) {
    for (let index in t) {
      if (!setT[t[index]]) setT[t[index]] = s[index]
    }

    for (let index in tLetters) {
      if (setT[tLetters[index]]) tLetters[index] = setT[tLetters[index]]
    }

    return tLetters.join("") == s
  } else {
    for (let index in s) {
      if (!setS[s[index]]) setS[s[index]] = t[index]
    }

    for (let index in sLetters) {
      if (setS[sLetters[index]]) sLetters[index] = setS[sLetters[index]]
    }

    return sLetters.join("") == t
  }
}

const s = "abdc",
  t = "baba"

console.log(isIsomorphic(s, t)) // Expected: false

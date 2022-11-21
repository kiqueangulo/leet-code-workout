/**
 * Given a string s consisting of words and spaces, return the length of the last word
 * in the string.
 *
 * A word is a maximal substring consisting of non-space characters only.
 *
 * Constrains:
 *      s consists of only English letters and spaces ' '.
 *      There will be at least one word in s.
 */

// Solution 1: Time -> O(n) (The whole string is used in each operation, except in pop)
const lengthOfLastWord1 = function (s) {
  return s
    .split(" ")
    .filter(item => item != "")
    .pop().length
}

//Solution2: Time -> O(n) (The whole string is manipulated only once)
const lengthOfLastWord2 = function (s) {
  const splited = s.split(" ")

  for (let i = splited.length - 1; i >= 0; i--) {
    if (splited[i]) return splited[i].length
  }
}

const s = "   fly me   to   the moon  "

console.log(lengthOfLastWord1(s))
console.log(lengthOfLastWord2(s))

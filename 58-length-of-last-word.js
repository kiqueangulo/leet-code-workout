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

const lengthOfLastWord = function (s) {
  let noSpace = ""

  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === " " && s[i + 1] === " ") continue

    noSpace += s[i]
  }

  return noSpace
}

const s = "   fly me   to   the moon  "

console.log(lengthOfLastWord(s))

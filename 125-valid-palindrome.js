/**
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters
 * and removing all non-alphanumeric characters, it reads the same forward and backward.
 * Alphanumeric characters include letters and numbers.
 *
 * Given a string s, return true if it is a palindrome, or false otherwise.
 *
 * Constrains:
 *      s consists only of printable ASCII characters.
 */

// Solution #1
const isPalindrome1 = function (s) {
  const characters = s.toLowerCase().split("")
  let forward = [],
    backwards = []

  for (let symbol of characters) {
    if (symbol.match(/[a-z0-9]/)) {
      forward.push(symbol)
      backwards.unshift(symbol)
    }
  }

  for (let index in forward) {
    if (forward[index] !== backwards[index]) {
      return false
    }
  }

  return true
}

//Solution #2
const isPalindrome2 = function (s) {
  if (s.length == 0 || s.length == 1) return true

  const newS = s.replace(/[\W_]+/g, "").toLowerCase()

  let [L, R] = [0, newS.length - 1]

  while (L < R) {
    if (newS[L] !== newS[R]) return false

    L++
    R--
  }

  return true
}

const s = "A man, a plan, a canal: Panama"

console.log(isPalindrome1(s)) // true
console.log(isPalindrome2(s)) // true

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

const isPalindrome = function (s) {
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

const s = "A man, a plan, a canal: Panama"

console.log(isPalindrome(s)) // true

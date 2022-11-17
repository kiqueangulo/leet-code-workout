/**
 * You are given a large integer represented as an integer array digits, where each digits[i]
 * is the i-th digit of the integer. The digits are ordered from most significant to least
 * significant in left-to-right order. The large integer does not contain any leading 0's.
 *
 * Increment the large integer by one and return the resulting array of digits.
 *
 * Constraints:
 *      1 <= digits.length <= 100
 *      0 <= digits[i] <= 9
 *      digits does not contain any leading 0's.
 */

const plusOne = function (digits) {
  for (let i = digits.length - 1; 0 <= i; i--) {
    if (digits[i] === 9) {
      digits[i] = 0
      continue
    }

    digits[i] += 1

    return digits
  }

  digits.unshift(1)

  return digits
}

const digits = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]

console.log(plusOne(digits))

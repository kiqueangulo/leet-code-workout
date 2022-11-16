/**
 * You have a long flowerbed in which some of the plots are planted, and some are not.
 * However, flowers cannot be planted in adjacent plots.
 *
 * Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1
 * means not empty, and an integer n, return if n new flowers can be planted in the
 * flowerbed without violating the no-adjacent-flowers rule.
 *
 * Constrains:
 *      flowerbed[i] is 0 or 1
 *      There are no two adjacent flowers in flowerbed
 *      0 <= n <= flowerbed.length
 */

const canPlaceFlowers = function (flowerbed, n) {
  const extendedFlowerbed = [0, ...flowerbed, 0]

  for (let i = 1; i < extendedFlowerbed.length - 1; ++i) {
    if (
      extendedFlowerbed[i - 1] == 0 &&
      extendedFlowerbed[i] == 0 &&
      extendedFlowerbed[i + 1] == 0
    ) {
      extendedFlowerbed[i] = 1
      n -= 1
    }
  }

  return n <= 0
}

const flowerbed = [1, 0, 0, 0, 1, 0, 0]
const n = 2

console.log(canPlaceFlowers(flowerbed, n))

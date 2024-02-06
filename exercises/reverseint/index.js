// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(num) {
  /** Goal; reverse a number!
   * 1. need to transform the number into a str
   * 2. reverse the string
   * 3. transform the string back into a number
   *  - perhaps map over it and check if the number n[idx]
   *      - if is not push it into an array of numbers
   *
   * 4. turn the array into a normal number?
   */

  // =================== Solution One =======================
  const reversedString = num.toString().split("").reverse().join("");
  //   let reversedNumber = parseInt(reversedString);
  //   if (num < 0) reversedNumber *= -1;

  // =================== Solution Two =======================
  const reversedNumber = Math.sign(num) * parseInt(reversedString);

  return reversedNumber;
}

// const num = 10;
// console.log(typeof num);

// const numToString = num.toString();
// console.log(numToString.split("").reverse().join(""));
// console.log(typeof Number(numToString));

console.log(reverseInt(-91));

module.exports = reverseInt;

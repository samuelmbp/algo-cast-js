// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  /**
   * Create a reversed variable to hold the new string
   * Use a for loop to iterate over the string in a reversed order
        - start from the length of string - 1 (end of string)    
   * add each reversed character to the reversed variable
   * return the reversed variable
   */

  // ============== Option One ==============
  //   let reversed = "";
  //   for (let i = str.length - 1; i >= 0; i--) {
  //     reversed += str[i];
  //   }
  //   return reversed;

  // ============== Option Two ==============
  //   let reversed = "";
  //   for (let char of str) {
  //     reversed = char + reversed;
  //   }
  //   return reversed;

  // ============== Option Three ==============
  // return str.split("").reverse().join("");

  // ============== Option Four ==============
  return str.split("").reduce((prev, curr) => curr + prev);
}

const reversedString = reverse("apple");
console.log(reversedString);

module.exports = reverse;

// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    /**
     * 1. Create an empty obj
     * 2. Loop over the string
     * 3. Check if the char already exists in the obj, if true increase by 1 if false add it to the obj with a count of 1
     * 4. Iterate over the object and find the key with the highest value
     *  - Initialize a variable with 0 and a variable with an empty str
     *  - check the values of each key in the obj to see if it's grater than the variable initialized at 0 and assign the value to it
     * - reassign the empty string to the char in the obj
     */

    const charCount = {};
    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }

    let charWithHighestValue = 0;
    let mostRepeatedChar = "";

    for (let char in charCount) {
        if (charCount[char] > charWithHighestValue) {
            charWithHighestValue = charCount[char];
            mostRepeatedChar = char;
        }
    }

    return mostRepeatedChar;
}

module.exports = maxChar;

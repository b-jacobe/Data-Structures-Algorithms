/**
 * Given a string sentence containing English letters (lower- or upper-case), 
 * return true if sentence is a Pangram, or false otherwise.
 * A Pangram is a sentence where every letter of the English 
 * alphabet appears at least once.
 * Note: The given sentence might contain other characters 
 * ike digits or spaces, your solution should handle these too.
 */

class Solution {
    // Function to check if given sentence is pangram
    checkIfPangram(sentence) {
      // TODO: Write your code here
      const checkSet = new Set();
      for(let char of sentence.toLowerCase()){
        if (char >= 'a' && char <= 'z'){
          checkSet.add(char);
        }
      }
      return checkSet.size === 26;
    }
  }

//UNIT TEST
const unitTest = new Solution();
let truePangram = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(unitTest.checkIfPangram(truePangram));
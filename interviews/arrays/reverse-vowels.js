/**
 * Given a string s, reverse only all the 
 * vowels in the string and return it.
 * The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.
 */


class Solution {
    reverseVowels(s) {
      // TODO: Write your code here
      const vowels = new Set(['a','e','i','o','u','A','E','I','O','U']);
      let convertArray = Array.from(s);
      let i = 0, j = convertArray.length-1;
      while (i < j ){
        if(!vowels.has(convertArray[i])){
          i++;
        } else if (!vowels.has(convertArray[j])){
          j--;
        } else {
          [convertArray[i], convertArray[j]] = [convertArray[j], convertArray[i]];
          i++;
          j--;
        }
      }
      return convertArray.join('');
    }
}

const unitTest = new Solution();
let testString = 'Brian';
console.log(unitTest.reverseVowels(testString));
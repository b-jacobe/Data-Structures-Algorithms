/** 
 * Given a one-dimensional array of integers, create a new array that 
 * represents the running sum of the original array.
 * The running sum at position i in the new array is calculated as 
 * the sum of all the numbers in the original array from the 0th index up 
 * to the i-th index (inclusive). Formally, the resulting array should be 
 * computed as follows: result[i] = sum(nums[0] + nums[1] + ... + nums[i]) 
 * for each i from 0 to the length of the array minus one.
*/

class Solution {
    runningSum(nums) {
        let result = [];
        let iterateSum = 0;
        for (let i = 0; i < nums.length; i++){
            iterateSum += nums[i];
            result.push(iterateSum)
        }
        return result;
    }
}

const unitTest = new Solution();
console.log(unitTest.runningSum([1,2,3,4,5]));
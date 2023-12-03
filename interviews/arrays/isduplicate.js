/**
 * Given an integer array nums, return true if any value appears at 
 * least twice in the array, and return false 
 * if every element is distinct.
 */

class Solution {
    containsDuplicate(nums) {
        // TODO: Write your code here
        const checkArray = new Set();
        let isDuplicate = 0;
        for(let i = 0; i < nums.length;i++){
            if(checkArray.has(nums[i])){
                isDuplicate++;
                break;
            }
        checkArray.add(nums[i]);
        }
    return isDuplicate > 0;
    }
}

//UNIT TEST
const unitTest = new Solution();
let trueArray = [1,2,3,4,5,6,7,1];
let falseArray = [1,2,3,4,5];
console.log(unitTest.containsDuplicate(trueArray));
console.log(unitTest.containsDuplicate(falseArray));
/**
 * @param {string[]} operations
 * @return {number}
 */

 /**
 C - Remove previous value: i - 1 --> pop()
 D - Multiply the previous value by 2: i * 2
 + - Sum of previous two scores: (i - 1) + (i - 2)
 X - Add to array

 Example 1: 
 ["4", "2", "3"]
    Solution: Return 9
 Example 2:
 ["4","-1","C"]
    Solution: 4
 Example 3:
 ["6", "8", "+", "9", "D", "1", "C"]
    Solution: 55
  */
    var calPoints = function(operations) {
        let resultArr = [];
    
        for (let i = 0; i < operations.length; i++) {
            if (operations[i] === "C") {
                // Remove the last score
                if (resultArr.length > 0) {
                    resultArr.pop();
                }
            } else if (operations[i] === "D") {
                // Double the last score and add it
                if (resultArr.length > 0) {
                    resultArr.push(2 * resultArr[resultArr.length - 1]);
                }
            } else if (operations[i] === "+") {
                // Sum the last two scores and add it
                if (resultArr.length > 1) {
                    resultArr.push(resultArr[resultArr.length - 1] + resultArr[resultArr.length - 2]);
                }
            } else {
                // Add a new score
                resultArr.push(parseInt(operations[i]));
            }
        }
    
        // Sum all the scores in the array
        return resultArr.reduce((a, b) => a + b, 0);
    };
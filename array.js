/**
 * Practice module for arrays in JavaScript
 * 
 * [Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
 * The array object stores a collection of items under a 
 * single variable name. NOTE: Arrays are not primitives
 * but contain the following object characteristics:
 *   - Resizable and contain a mix of different types
 *   - Not associative so therefore cannot be accessed
 *     using strings but integers as index
 *   - Zero-indexed
 */

// ======== ARRAYS ========
// Constructor
Array();

// Declaration and output
let myArray = ["first name","last name", "address"];
myArray.forEach(item => {
    console.log(item);
});
console.log(Array.isArray(myArray));

// Push() Method
myArray.push("zip");
console.log(myArray);

// Shift() Method
let firstElement = myArray.shift();
console.log(firstElement);

// Unshift() Method
myArray.unshift("Primary Key");
console.log(myArray);

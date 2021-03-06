/**
 * Practice module for map object in JavaScript
 * 
 * [Maps](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
 * The map object holds key-value pairs and remembers the original
 * insertion order of the keys. Any value (both objects and primitive)
 * may be used as either a key or a value.
 * It is an iterable data structure, meaning that the sequence of
 * insertion is remembered and that we can access elements in (for..of) loop.
 *   - Any data type can be a Map key
 *   - Inherits from Map.prototype and offers all sort of utility
 */

const contacts = new Map();

contacts.set('Brian', {phone: "818-468-0908", address: "988 Fulton St. #342"});
contacts.set('Justine', {phone: "333-222-1111", address: "123 Anywhere St."});
contacts.set('Bridget', {phone: "444-555-6666", address: "456 Nowhere Ave."});
contacts.has('Brian'); //TRUE
contacts.get('Leon'); //UNDEFINED
contacts.delete('Bridget'); //TRUE`

console.log(contacts);
console.log(contacts.size) //2

const products = [
    {name: 'Laptop', price: 3300, brand: 'apple'},
    {name: 'iPhone', price: 1300, brand: 'apple'},
    {name: 'Apple Watch', price: 399, brand: 'apple'},
];

let total = 0;
const sumPrice = products.map(product => {
    return total += product.price;
})

console.log(total);

//DATA STRUCTURES

//BEFORE
const discount = (amount, code) => {
    switch (code) {
        case 'DIJFNC':
            return amount * 0.80;
        case 'XPFJVM':
            return amount * 0.75;
        case 'FJDPCX':
            return amount * 0.50;
        case '':
            break;
    }
};

//AFTER
const DISCOUNT_MULTIPLIER = {
    'DIJFNC':0.80,
    'XPFJVM':0.75,
    'FJDPCX':0.50,
};

const discount = (amount, code) => {
    return amount * DISCOUNT_MULTIPLIER[code];
}
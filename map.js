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
contacts.delete('Bridget'); //TRUE

console.log(contacts.size) //2


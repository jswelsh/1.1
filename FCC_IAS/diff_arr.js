/* 
Compare two arrays and return a new 
array with any items only found in 
one of the two given arrays, but not 
both. In other words, return the 
symmetric difference of the two arrays.

Note
You can return the array with its 
elements in any order.
*/

//these two are the same 

/* 
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [1, 2, 3, 5, 6];
let difference = arr1
                 .filter(number => !arr2.includes(number))
                 .concat(arr2.filter(number=> !arr1.includes(number)))
console.log(difference)
*/
/* 
let diffArray = (arr1, arr2) => 
        arr1
        .filter(number => !arr2.includes(number))
        .concat(arr2.filter(number=> !arr1.includes(number)))

console.log(diffArray([1, 2, 3, 5, 6], [1, 2, 3, 4, 5, 8]));
*/
/* 
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [1, 2, 3, 5, 6];
Array.prototype.diff = function(arr) { 
    return this.filter(x => !arr.includes(x)); 
}
console.log(arr1.diff(arr2).concat(arr2.diff(arr1)))
 */
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [1, 2, 3, 5, 6];
Array.prototype.diff = function(arr) { 
    return this.filter(x => !arr.includes(x)); 
}
console.log(arr1.diff(arr2).concat(arr2.diff(arr1)))

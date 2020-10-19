/* 
You will be provided with an initial 
array (the first argument in the 
destroyer function), followed by 
one or more arguments. Remove all
elements from the initial array 
that are of the same value as 
these arguments.

Note
You have to use the 
arguments object.
*/
/* 
function destroyer(arr) {
    let destroy = {...arguments};
    delete destroy["0"]
    destroy = Object.values(destroy)
    return arr.reduce((prev, curr) => !destroy.includes(curr) ? [...prev, curr]: prev, [])
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3))
*/
/* 
function destroyer(arr) {
    let destroy = {...Object.values(arguments)};
    delete destroy['0'];
    destroy = Object.values(destroy);
    
    return arr.filter(num => !destroy.includes(num))

}
  
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
*/

/* 
function destroyer(arr) {
    let destroy = {...arguments};
    delete destroy['0'];

    return arr.filter(x => !Object.values(destroy).includes(x))
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3)) 
*/
/*
function destroyer(arr) {
    let destroy = Array.from(arguments).slice(1)
    return arr.filter(x => !Object.values(destroy).includes(x))
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3))  
*/
let destroyer = (arr, ...destroy) => arr.filter(num => !destroy.includes(num))
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3))  

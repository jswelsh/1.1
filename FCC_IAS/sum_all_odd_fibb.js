/* 
Given a positive integer num, 
return the sum of all odd 
Fibonacci numbers that are 
less than or equal to num.

The first two numbers in the 
Fibonacci sequence are 1 and 1. 
Every additional number in the 
sequence is the sum of the two 
previous numbers. The first 
six numbers of the Fibonacci 
sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should 
return 10 because all odd Fibonacci 
numbers less than or equal to 
10 are 1, 1, 3, and 5.
*/
/* 
function sumFibs(num) {
    let storage = {
        total : 0,
        x : 1,
        y : 1,
        hold : 0
    }
    
    while(storage['x'] <= num){
        //console.log(storage['x']%2===1,storage['x'])
        storage['total'] = storage['x']%2===1 ? storage['total'] + storage['x'] : storage['total']
        storage['hold'] = storage['x'] + storage['y']
        storage['x'] = storage['y']
        storage['y'] = storage['hold']
    }
   return storage['total'];
 }
*/


function sumFibs(num) {
    let storage = {
        total : 0,
        x : 0,
        y : 1,
    }
    
    while(storage['x'] <= num){
        storage['total'] = storage['x']%2===1 ? 
            storage['total'] + storage['x'] : 
            storage['total']
        
        storage['x'] ^= storage['y']
        storage['y'] ^= storage['x']
        storage['x'] ^= storage['y']
        storage['y'] += storage['x']
    }
   return storage['total'];
 }
 

console.log(sumFibs(4)); // 5
console.log(sumFibs(10)) // 10
console.log(sumFibs(1000)); //1785
console.log(sumFibs(4000000)); //4613732
console.log(sumFibs(75024)); //60696
console.log(sumFibs(75025)); //135721 

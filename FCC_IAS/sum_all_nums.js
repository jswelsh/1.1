/* 
We'll pass you an array of two numbers. 
Return the sum of those two numbers plus 
the sum of all the numbers between them. 
The lowest number will not always come first.

For example, sumAll([4,1]) should return 
10 because sum of all the numbers between 
1 and 4 (both inclusive) is 10.
*/

function sumAll(arr) {
    let hold = arr.sort((a,b)=> a-b)
    let total = hold[0] < hold[1] ? hold[0]+sumAll([arr[0]+1, arr[1]]) 
                                  : + hold[1]
    return total
  }
  
  console.log(sumAll([1, 4]));
  console.log(sumAll([1, 7])); 
  console.log(sumAll([10, 4]));
  console.log(sumAll([10, 20]));
  console.log(sumAll([30, 15]));
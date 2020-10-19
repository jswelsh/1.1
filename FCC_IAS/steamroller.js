/* 
Flatten a nested array. You must account for varying levels of nesting.
*/

function steamrollArray(arr) {
   let final = [];
   return arr.reduce((prev, curr)=> 
   Array.isArray(curr) ? prev.concat(steamrollArray(curr)) : prev.concat(curr)
   , [])
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
/* 
Find the smallest common multiple 
of the provided parameters that 
can be evenly divided by both, as 
well as by all sequential numbers 
in the range between these 
parameters.

The range will be an array of two 
numbers that will not necessarily 
be in numerical order.  

For example, if given 1 and 3, 
find the smallest common multiple 
of both 1 and 3 that is also 
evenly divisible by all numbers 
between 1 and 3. The answer here 
would be 6.
*/

/* 
function smallestCommons(arr) {
    let gdc = (a,b) => {
        //console.log(a,b)
        while(a != b){
            a>b ? a-=b : b-=a
        }
        //console.log(a)
        return a
    }
    let lcm = (a,b) => (a*b)/ gdc(a,b);
    let array_sort = (array) => {
        return array[0] > array[1] ? array.reverse() : array;
        
    }
    let [min,max] = array_sort(arr);
    let curr_lcm = min
    while(min < max){
        curr_lcm = lcm(curr_lcm, ++min);
    }
    return curr_lcm
}
*/
function smallestCommons(arr) {
    let gcd = (a,b) => (b === 0) ? a : gcd(b, a % b);
    let lcm = (a,b) => (a * b)/ gcd(a,b);

    let [min,max] = arr.sort((a,b) => a - b);
    let curr_lcm = min;

    while(min < max){
        curr_lcm = lcm(curr_lcm, ++min);
    }
    return curr_lcm
}

console.log(smallestCommons([1, 5])); //60
console.log(smallestCommons([5, 1])); //60
console.log(smallestCommons([2, 10])); //2520
console.log(smallestCommons([1, 13])); //360360
console.log(smallestCommons([23, 18])); //6056820
console.log(smallestCommons([4,11]))

/* 
A prime number is a whole number 
greater than 1 with exactly two 
divisors: 1 and itself. For example, 
2 is a prime number because it is 
only divisible by 1 and 2. In contrast, 
4 is not prime since it is divisible 
by 1, 2 and 4.

Rewrite sumPrimes so it returns the 
sum of all prime numbers that are 
less than or equal to num.
*/

function sumPrimes(numb) {
    let sum = (numb === 1) ? 1 : 0
    let check_prime = function(num){
        for(let x = 2; x < num; x++){
            if(num % x === 0){
                    return false
            }
        }
        return true
    }

    for(let y = 2; y <= numb; y++){
        if(check_prime(y)){
            sum+=y;
        }
    }
    return sum
    //console.log(sum)
}
console.log(sumPrimes(1))
console.log(sumPrimes(10)) //17
console.log(sumPrimes(977)) // 73156.
//console.log(sumPrimes(1));
  
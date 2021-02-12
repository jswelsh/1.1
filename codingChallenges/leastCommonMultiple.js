const leastCommonMultiple = (array) => {
  const gcd = (a, b) => a ? gcd(b % a, a) : b;
  const lcm = (a, b) => a * b / gcd(a, b);
  return array.reduce(lcm)
}


console.log('420', leastCommonMultiple([3, 30, 5, 6, 7, 12, 14]));
console.log('385 ', leastCommonMultiple([5, 7, 11]));
console.log('2520 ', leastCommonMultiple([1, 2, 3, 4, 5, 6, 7, 8, 9]))

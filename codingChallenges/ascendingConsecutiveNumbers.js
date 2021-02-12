const mergeArrayElements = (array,size) => {
  let newArray = []
  for (let i = 0; i < array.length; (i+=size)) {
      newArray.push(
        array
          .slice(i,i+size)
          .reduce((acc, el) => {
          return acc + el
          },)
      )
  }
  console.log(newArray);
  return newArray
}

const ascendingConsecutiveNumbers = (numbers, size = 2) => {
  const numberArr = typeof numbers === 'string' ? numbers.split('') : [...numbers]
  
  const isAscendingChecker = ({isAscending, previousValue}, element) => {
    if(isAscending && previousValue === null ){
      return {isAscending,previousValue: element}
    }
    if(parseInt(previousValue) + 1 === parseInt(element)){
      return {isAscending, previousValue: element}
    }
    return {isAscending: false, previousValue: element}
  }
  let hold = numberArr.reduce( isAscendingChecker, {isAscending:true, previousValue: null })
  if(hold.isAscending) return hold.isAscending
  if(numberArr.length <= 2){
    return false
  }
  return ascendingConsecutiveNumbers(mergeArrayElements(numberArr,size), size+1)
}
/* console.log('true:', ascendingConsecutiveNumbers("23242526"));
console.log('true:', ascendingConsecutiveNumbers("12345"));
console.log('true:', ascendingConsecutiveNumbers("232425"));
console.log('true:', ascendingConsecutiveNumbers("424425"));
console.log('false:', ascendingConsecutiveNumbers("424425423")); */
console.log('true:', ascendingConsecutiveNumbers("123412351236"));





/*
ascending("232425") ➞ true
// Consecutive numbers 23, 24, 25

ascending("2324256") ➞ false
// No matter how this string is divided, the numbers are not consecutive.

ascending("444445") ➞ true
// Consecutive numbers 444 and 445.
*/
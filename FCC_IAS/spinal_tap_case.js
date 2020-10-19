/* 
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

need to check if a char is capital then immediately after lowercase, if so turn it into a dash
need to check if a char is an underscore, if so turn it into a dash
need to turn everything into lowercase
*/
/* 
function spinalCase(str) {
    return str.replace()
  }

  spinalCase('This Is Spinal Tap');
*/

function spinalCase(str) {
  return str.replace(/([a-z])([A-Z])/g, "$1 $2")
            .split(/-|_|\s/)
            .join("-")
            .toLowerCase()
}
  
  // test here
console.log(spinalCase("This Is Spinal Tap"));
console.log(spinalCase("thisIsSpinalTap"))
console.log(spinalCase("The_Andy_Griffith_Show"))


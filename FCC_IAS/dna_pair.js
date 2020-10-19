/* 
The DNA strand is missing the pairing 
element. Take each character, get its 
pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match 
the missing element to the provided character.

Return the provided character as the first 
element in each array.

For example, for the input GCG, return 
[["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired 
up in an array, and all the arrays are 
grouped into one encapsulating array.
*/

/* 
function pairElement(str) {
    let hold = [];
    (str.split("")).forEach(element => {
       hold.push(
           element === "A" ? ["A", "T"] :
           element === "C" ? ["C", "G"] :
           element === "G" ? ["C", "G"] :
                             ["T", "A"]
        )
    });
    return hold
  } 
  */
/*
function pairElement(str) {
  return (str.split('')).map(ele => 
      ele === "A" ? ["A", "T"] :
      ele === "C" ? ["C", "G"] :
      ele === "G" ? ["C", "G"] :
                    ["T", "A"]
  )
}
*/
function pairElement(str) {
    let index = {
        A: "T",
        C: "G",
        G: "C",
        T: "A"
    }
    return str.split('').map(x => [x, index[x]])
}

console.log(pairElement("GCG"));

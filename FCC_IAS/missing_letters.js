/* 
Find the missing letter in the 
passed letter range and return it.

If all letters are present in 
the range, return undefined.
*/


/* 
function fearNotLetter(str) {
    let alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let key = alpha.indexOf(str.split('')[0]);
    let final;



    str.split("").some((letter, index) => {
        if(letter !== alpha[index + key]){
            console.log("hi")
            final = alpha[index + key]
            return true
        }
    });
    return final
}
*/
function fearNotLetter(str) {
    let alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let key = alpha.indexOf(str.split('')[0]);
    let final;
    str.split('').some(
        (letter, index) => 
        (letter !== alpha[index + key]) ? 
            final = alpha[index + key] : 
            null
    )

    return final
}

console.log(fearNotLetter("abce"))
console.log(fearNotLetter("abcdefghjklmno"))
console.log(fearNotLetter("stvwx"))

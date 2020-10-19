/* 
Pig Latin is a way of altering 
English Words. The rules are as 
follows:

- If a word begins with a consonant, 
take the first consonant or consonant 
cluster, move it to the end of the 
word, and add "ay" to it.

- If a word begins with a vowel, 
just add "way" at the end.

Translate the provided string to Pig 
Latin. Input strings are guaranteed 
to be English words in all lowercase.
*/

function translatePigLatin(str) {
    const consonant = /(^[bcdfghjklmnpqrstvwxys]+)/
    return str.match(consonant) ? 
            str.split(consonant)
               .slice(1,3)
               .reverse()
               .join("")
               .concat("ay") : str.concat("way")
}
  
console.log(translatePigLatin("algorithmway"));

//const consonant = ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","y","s"]
// ? (str[0] in "bcdfghjklmnpqrstvwxys")
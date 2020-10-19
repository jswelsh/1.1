/* 
Convert the characters 
& &amp
< &gt
> &lt
" &quot
' &apos;
in a string to their corresponding 
HTML entities.
*/


function convertHTML(str) {
    let entities = [
        [/&/g, "&amp;"],
        [/</g, "&lt;"],
        [/>/g, "&gt;"],
        [/"/g, "&quot;"],
        [/'/g, "&apos;"]
    ]
/*     console.log("alpha", str.replace(/&/g, entities['/&/g']))
 */    
    let converted = str
    entities.map(entity => //console.log(entity[0])
        converted = converted.replace(entity[0], entity[1])
    )
    return converted ;
}

console.log(convertHTML("Dolce & & Gabbana"));

console.log(convertHTML("Sixty > twelve"));
console.log(convertHTML('Stuff in "quotation marks"'));
console.log(convertHTML("Schindler's List"));
console.log(convertHTML("<>"));
console.log(convertHTML("abc"));
console.log(convertHTML("Hamburgers < Pizza < Tacos"))


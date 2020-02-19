
/* console.log("type 1");
for (let i = 1; i < 101; i++){
    if (i % 15 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}  */

/* console.log("type 2");
for (let i = 1; i < 101; i++){
    if (i % 15 === 0) console.log("FizzBuzz");
    else if (i % 3 === 0) console.log("Fizz");
    else if (i % 5 === 0) console.log("Buzz");
    else console.log(i);
}  */

/* console.log("type 3");
for (let i = 0; i < 100;) {
    console.log((++i % 3 ? '':'Fizz') + (i % 5 ? '':'Buzz') || i)
}  */

/* console.log("type 4");
for (let i = 0; i < 100;) 
    console.log( 
        (++i % 3 ? '':'Fizz') + (i % 5 ? '':'Buzz') || i
        )  */
/* 
//wont work in sctrict
console.log("type 5") 
    for (i = 0; i < 100;) console.log( (++i % 3 ? '':'Fizz') + (i % 5 ? '':'Buzz') || i) 
*/
/* 
console.log("type 6");
let i = 0;
while (i < 100) {
    i = i + 1;

    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
    }else if (i % 3 === 0){
        console.log('Fizz');
    }else  if(i % 5 === 0){
        console.log('Buzz');
    } else console.log(i.toString());
} 
*/

/*
 console.log("type 7");
let i = 0;
while (i < 100) {
    ++i;
    console.log(
        ( i % 3 ? '' : 'Fizz') + (i % 5 ? '': 'Buzz')
        || i
    )
} 
*/

/*
 console.log("type 8");
let i = 0;
while (i < 100){
    console.log(
        (++i % 3 ? '' : 'Fizz') +
        (i % 5 ? '' : 'Buzz') ||
        i 
    )
} */
console.log("type 9");
let i = 0;
while (i < 100){
    ++i;
    console.log(
        i % 15 ? i % 5 ? i % 3 ? i: 'Fizz' : 'Buzz' : 'FizzBuzz'
    )
}
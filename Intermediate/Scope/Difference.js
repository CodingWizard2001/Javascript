// Difference between keyword


let a = 10;
const b = 40;
var c = 30;

{
    a = 40;
    b = 60;
    c = 90;
}

console.log(a); // Error
console.log(b); // Error
console.log(c);
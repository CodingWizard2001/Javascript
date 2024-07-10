// Difference between "let" and "var" keyword

var a = 5;
let b = 7;
{
    var a = 7;
    let b = 5;
    console.log("The Value of a : " + a);
    console.log("The Value of b : " + b);
}
console.log("The Value of b : " + b);
console.log("The Value of a : " + a);
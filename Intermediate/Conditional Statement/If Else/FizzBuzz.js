// Write a JavaScript program that prints the numbers from 1 to 100. But for multiples of three, print "Fizz" instead of the number, and for multiples of five, print "Buzz". For numbers which are multiples of both three and five, print "FizzBuzz".



const prompt=require("prompt-sync")({sigint:true}); 
let num = parseInt(prompt("Enter a number : "));


if(num % 3 == 0 && num % 5 == 0) console.log("FizzBuzz");
else if(num % 3 == 0) console.log("Fizz");
else if(num % 5 == 0) console.log("Buzz");
else console.log("Are not multiple of 3 & 5");
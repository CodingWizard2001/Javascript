// Write a program that takes two integers and a character representing a mathematical operation (+, -, *, /) and uses a switch statement to perform the corresponding operation. Print the result.


const prompt=require("prompt-sync")({sigint:true}); 
let num1 = parseInt(prompt("Enter first number : "));
let num2 = parseInt(prompt("Enter second number : "));
let operand = prompt("Enter a operand : ");

switch (operand) {
    case '+':
        console.log(`Addition : ${num1 + num2}`);
        break;
    case '-':
        console.log(`Subtraction : ${num1 - num2}`);
        break;
    case '*':
        console.log(`Multiplication : ${num1 * num2}`);
        break;
    case '/':
        console.log(`Division : ${num1 / num2}`);
        break;
    case '%':
        console.log(`Remainder : ${num1 % num2}`);
        break;
    default:
        console.log("Can't understand please choose another option");
        break;
}
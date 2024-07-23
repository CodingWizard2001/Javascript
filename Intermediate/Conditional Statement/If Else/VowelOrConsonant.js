// Write a program to check whether an alphabet is a vowel or a consonant.


const prompt=require("prompt-sync")({sigint:true}); 
let letter = prompt("Enter a letter : ");

if(letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u') console.log("Vowel");
else console.log("Consonant");
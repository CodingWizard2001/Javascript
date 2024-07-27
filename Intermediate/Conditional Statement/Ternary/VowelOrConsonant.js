// Takes a character and returns "Vowel" if the character is a vowel (a, e, i, o, u), otherwise return "Consonant".



const prompt=require("prompt-sync")({sigint:true});
let character = prompt("Enter character : ");

character == 'a' || character == 'e' || character == 'i' || character == 'o' || character == 'u' || character == 'A' || character == 'E' || character == 'I' || character == 'O' || character == 'U' ? console.log("Vowel") : console.log("Consonant");;
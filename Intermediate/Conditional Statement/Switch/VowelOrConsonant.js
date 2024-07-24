// // Write a program to check whether an alphabet is a vowel or a consonant.


const prompt=require("prompt-sync")({sigint:true}); 
let character = prompt("Enter character : ");


switch (character) {
    case "A":
        console.log(`Vowel`);
        break;
    case 'E':
        console.log(`Vowel`);
        break;
    case 'I':
        console.log(`Vowel`);
        break;
    case 'O':
        console.log(`Vowel`);
        break;
    case 'U':
        console.log(`Vowel`);
        break;
    case "a":
        console.log(`Vowel`);
        break;
    case 'e':
        console.log(`Vowel`);
        break;
    case 'i':
        console.log(`Vowel`);
        break;
    case 'o':
        console.log(`Vowel`);
        break;
    case 'u':
        console.log(`Vowel`);
        break;
    default:
        console.log("Consonant");
        break;
}
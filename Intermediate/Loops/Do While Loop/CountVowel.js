// Write a do-while loop to count the number of vowels in a given string.



const prompt=require("prompt-sync")({sigint:true}); 
let String = prompt("Enter String : ");

let count = 0;
let i = 0
do{
    if(String[i] == 'a' || String[i] == 'e' || String[i] == 'i' || String[i] == 'o' || String[i] == 'u' || String[i] == 'A' || String[i] == 'E' || String[i] == 'I' || String[i] == 'O' || String[i] == 'U') count++;
    
    i++;
}while(i < String.length);
console.log(`No. of vowel : ${count}`);
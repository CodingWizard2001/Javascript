// Write a for loop to count the number of vowels in a given string.



const prompt=require("prompt-sync")({sigint:true}); 
let String = prompt("Enter String : ");

let count = 0;
for(let i = 0;i < String.length;i++){
    if(String[i] == 'a' || String[i] == 'e' || String[i] == 'i' || String[i] == 'o' || String[i] == 'u' || String[i] == 'A' || String[i] == 'E' || String[i] == 'I' || String[i] == 'O' || String[i] == 'U') count++;
}
console.log(`No. of vowel : ${count}`);
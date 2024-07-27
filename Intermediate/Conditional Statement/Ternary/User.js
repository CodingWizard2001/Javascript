// Takes a boolean value indicating if a user is logged in and returns "Welcome" if true, otherwise return "Please log in".



const prompt=require("prompt-sync")({sigint:true});
let user = prompt("Enter status : ");

user == 'true' ? console.log("Welcome") : console.log("Please log in");
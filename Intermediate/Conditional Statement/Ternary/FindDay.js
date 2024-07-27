// Takes a day of the week (1-7) and returns "Weekend" if the day is Saturday or Sunday, otherwise return "Weekday".



const prompt=require("prompt-sync")({sigint:true});
let day = parseInt(prompt("Enter a day number : "));

day %= 7;

(day == 0 ? console.log("Sunday") : ((day == 1) ? console.log("Monday") : ((day == 2) ?  console.log("Tuesday") : ((day == 3) ? console.log("Wednesday") : ((day == 4) ? console.log("Thursday") : ((day == 5) ? console.log("Friday") : console.log("Saturday")))))));
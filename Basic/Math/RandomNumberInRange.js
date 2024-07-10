// Write a function that generates a random integer between two given numbers, inclusive.


let mini = 10,maxi = 20;
console.log(Math.round(Math.random() * (maxi - mini + 1)) + 10);
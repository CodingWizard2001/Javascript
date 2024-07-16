// Write a function to generate a random number


function randomNumberGenerator(start,end){
    return Math.floor(Math.random() * 10) + start;
}

console.log(randomNumberGenerator(80,90));
console.log(randomNumberGenerator(1,10));
// Print today time


const todayDate = new Date();
let hour = todayDate.getHours();
let minute = todayDate.getMinutes();
let second = todayDate.getSeconds();

console.log(`Time : ${hour} - ${minute} - ${second}`);
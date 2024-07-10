// Print today


const todayDate = new Date();
let year = todayDate.getFullYear();
let month = todayDate.getMonth() + 1;
let day = todayDate.getDate();

console.log(`Date : ${day} - ${month} - ${year}`);
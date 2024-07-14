// What is hasOwnProperty method

const myObj = {
    1 : "One",
    2 : "Two",
    3 : "Three"
}

console.log(myObj.hasOwnProperty('3')); // true
console.log(myObj.hasOwnProperty('5')); // false
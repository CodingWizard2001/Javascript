// What is the problem of assign method

const myObj1 = {
    1 : "One",
    2 : "Two",
    3 : "Three"
}
const myObj2 = {
    4 : "Four",
    5 : "Five",
    6 : "Six"
}

// Actually it merge all the value to first obj but we did not want that because assign operator already returns a object
const obj = Object.assign(myObj1,myObj2);
console.log(obj);
console.log(myObj1);
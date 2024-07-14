// What is assign method 

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

// Assign return ans obj
const obj = Object.assign(myObj1,myObj2);
console.log(obj);
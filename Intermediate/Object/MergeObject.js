// How to merge object

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

const obj = {myObj1,myObj2}; // This doesn't actually merge them
console.log(obj);
// How to access symbol


const mySym = Symbol("myKey1");

const myObj = {
    Name : "Rahul",
    Age : 23,
    [mySym] : "myKey1",
    Gmail : "goswami.rahul1002@gamil.com",
    Department : "IT",
    Roll : 25
}

console.log(myObj); // [Symbol(myKey1)]: 'myKey1'
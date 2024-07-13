// Object references function without parentheses


const myObj = {
    Name : "Rahul",
    Age : 23,
    Gmail : "goswami.rahul1002@gamil.com",
    Department : "IT",
    Roll : 25
}

myObj.greeting = function(){
    console.log("Hello!");
}
console.log(myObj.greeting); // [Function (anonymous)]
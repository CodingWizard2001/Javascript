// Use of this property


const myObj = {
    Name : "Rahul",
    Age : 23,
    Gmail : "goswami.rahul1002@gamil.com",
    Department : "IT",
    Roll : 25
}

myObj.greeting = function(){
    console.log(`Hello, ${this.Name}`);
}
console.log(myObj.greeting()); // Hello , Rahul undefined
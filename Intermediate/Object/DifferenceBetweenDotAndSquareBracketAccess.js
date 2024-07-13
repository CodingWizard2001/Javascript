// Difference between dot access and square access


const myObj = {
    Name : "Rahul",
    "Full Name" : "Rahul Goswami",
    Age : 23,
    Gmail : "goswami.rahul1002@gamil.com",
    Department : "IT",
    Roll : 25,
}

console.log(myObj["Full Name"]);
console.log(myObj.Full Name); // Throws error we can't do it
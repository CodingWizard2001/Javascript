// How to freeze object

const myObj = {
    Name : "Rahul",
    Age : 23,
    Gmail : "goswami.rahul1002@gamil.com",
    Department : "IT",
    Roll : 25
}
myObj.Name = "Kira";
console.log(myObj);
Object.freeze(myObj);
myObj.Name = "Rahul"; // No updation will be done
console.log(myObj);
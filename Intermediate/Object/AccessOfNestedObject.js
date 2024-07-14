// How to access nested object


const myInfo = {
    email : "goswami@gmail.com",
    fullName : {
        userName : {
            FirstName : "Rahul",
            LastName : "Goswami",
        }
    }
}

console.log(myInfo.fullName);
console.log(myInfo.fullName.userName);
console.log(myInfo.fullName.userName.FirstName);
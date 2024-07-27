// Create a function that takes a user profile object with an optional email property. Return the email if it exists, otherwise return "No Email Provided".



function findEmail(obj) {
    return obj.email ?? "No Email Provided";
}

const person1 = {email: "Rahul2001@gmail.com" };
const person2 = {};

console.log(findEmail(person1));
console.log(findEmail(person2));
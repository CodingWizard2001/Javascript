// Create a function that takes a person object with an optional nickname property. Return the nickname if it exists, otherwise return "No Nickname".



function findEmail(obj) {
    return obj.nickName ?? "No Nickname";
}

const person1 = {nickName: "Kira"};
const person2 = {nickName: null};

console.log(findEmail(person1));
console.log(findEmail(person2));
// Write a function that takes a user object with an optional age property. Return the age if it exists, otherwise return 18.



function findAge(obj) {
    return obj.age ?? 18;
}

const person1 = { age : 65 };
const person2 = {};

console.log(findAge(person1));
console.log(findAge(person2));
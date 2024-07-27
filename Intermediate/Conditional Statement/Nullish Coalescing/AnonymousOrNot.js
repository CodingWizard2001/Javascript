// Takes an object with an optional name property. Return the name if it exists, otherwise return "Anonymous".



function getName(obj) {
    return obj.name ?? "Anonymous";
}

const person1 = { name: "Rahul" };
const person2 = {};

console.log(getName(person1));
console.log(getName(person2));
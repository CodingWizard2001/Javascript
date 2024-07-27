// Create a function that takes an object with an optional status property. Return the status if it exists, otherwise return "unknown".



function getStatus(obj) {
    return obj.status ?? "unknown";
}

const person1 = { status: "Online" };
const person2 = {};

console.log(getStatus(person1));
console.log(getStatus(person2));
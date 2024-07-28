// Write a for loop to calculate the average of elements in an array.



let myArray = [5,8,2,7,3,11,4,9];
let sum = 0;
for(let i = 0;i < myArray.length;i++){
    sum += myArray[i];
}
console.log(`Average element will be : ${sum / myArray.length}`);
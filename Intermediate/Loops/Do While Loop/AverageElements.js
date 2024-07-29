// Write a do-while loop to calculate the average of elements in an array.



let myArray = [5,8,2,7,3,11,4,9];
let sum = 0;

let i = 0;
do{
    sum += myArray[i];
    i++;
}while(i < myArray.length);

console.log(`Average element will be : ${sum / myArray.length}`);
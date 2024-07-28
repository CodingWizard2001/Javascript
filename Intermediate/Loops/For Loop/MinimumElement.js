// Write a for loop to find the minimum element in an array.



let myArray = [5,8,2,7,3,11,4,9];
let mini = myArray[0];
for(let i = 1;i < myArray.length;i++){
    if(mini > myArray[i]) mini = myArray[i];
}
console.log(`Minimum element will be : ${mini}`);
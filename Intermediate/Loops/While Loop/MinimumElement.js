// Write a while loop to find the minimum element in an array.



let myArray = [5,8,2,7,3,11,4,9];
let mini = myArray[0];

let i = 1;
while(i < myArray.length){
    if(mini > myArray[i]) mini = myArray[i];
    i++;
}
console.log(`Minimum element will be : ${mini}`);
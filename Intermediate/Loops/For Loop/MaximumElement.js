// Write a for loop to find the maximum element in an array.



let myArray = [5,8,2,7,3,11,4,9];
let maxi = 0;
for(let i = 0;i < myArray.length;i++){
    if(maxi < myArray[i]) maxi = myArray[i];
}
console.log(`Maximum element will be : ${maxi}`);
// Write a while loop to find the maximum element in an array.



let myArray = [5,8,2,7,3,11,4,9];
let maxi = 0;

let i = 0;
while(i < myArray.length){
    if(maxi < myArray[i]) maxi = myArray[i];
    i++;
}
console.log(`Maximum element will be : ${maxi}`);
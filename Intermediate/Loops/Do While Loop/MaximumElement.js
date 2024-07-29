// Write a do-while loop to find the maximum element in an array.



let myArray = [5,8,2,7,3,11,4,9];
let maxi = 0;

let i = 0;
do{
    if(maxi < myArray[i]) maxi = myArray[i];
    i++;
}while(i < myArray.length);
console.log(`Maximum element will be : ${maxi}`);
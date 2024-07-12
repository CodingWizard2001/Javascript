// Use of flat method attribute 2

const arr1 = [1,2,3,[4,5,6],[7,8,9,[10,11]]];
console.log(arr1.flat(2)); // [ 1, 2, 3, 4,  5, 6, 7, 8, 9, 10, 11 ]
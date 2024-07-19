// Can we access THIS keyword in a function


const myFunc = function(){
    let username = "Rahul";
    console.log(this.username); // it shows undefined
}
myFunc();
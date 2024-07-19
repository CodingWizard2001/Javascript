// How to check current context using this keyword


const obj = {
    username : "Rahul",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username} welcome`); // point current context
        console.log(this);
    }
}

obj.welcomeMessage();

// Change the value 
obj.username = "Shrabani";
obj.welcomeMessage();

// Output will be:
// Rahul welcome
// {
//   username: 'Rahul',
//   price: 999,
//   welcomeMessage: [Function: welcomeMessage]
// }
// Shrabani welcome
// {
//   username: 'Shrabani',
//   price: 999,
//   welcomeMessage: [Function: welcomeMessage]
// }
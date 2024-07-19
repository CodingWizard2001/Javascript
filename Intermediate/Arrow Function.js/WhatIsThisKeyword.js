// What is the purpose of this keyword


const obj = {
    username : "Rahul",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username} welcome`); // point current context
    }
}

obj.welcomeMessage();
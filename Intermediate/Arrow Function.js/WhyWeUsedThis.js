// Why we used THIS keyword


const obj = {
    username : "Rahul",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username} welcome`);
    },
}

obj.welcomeMessage();

// Now if we change username value

obj.username = "Shrabani";
obj.welcomeMessage();

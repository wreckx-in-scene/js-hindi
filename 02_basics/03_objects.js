//object literals

//using symbol in objects
const mySym = Symbol("key1")

const JSUser = {
    name : "Amogh",
    age : 21,
    [mySym] : "mykey1",
    email : "amogh123@gmail.com",
    location : "Kolkata",
    isLoggedIn : false,
    lastLoginDays : ["Monday" , "Saturday"]
}

console.log(JSUser.email);     //one way of accessing data(not recommended)
console.log(JSUser["email"]);   //preferred way
console.log(typeof JSUser[mySym]);     //accessing symbol

//freezing changes in objects 
JSUser.name = "Amogh Dandotiya"
Object.freeze(JSUser);
console.log(JSUser);

//declaring functions in objects 
JSUser.greeting = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JSUser.greeting());

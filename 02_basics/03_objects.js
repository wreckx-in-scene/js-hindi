//object literals

//using symbol in 
const JSUser = {
    name : "Amogh",
    age : 21,
    email : "amogh123@gmail.com",
    location : "Kolkata",
    isLoggedIn : false,
    lastLoginDays : ["Monday" , "Saturday"]
}

console.log(JSUser.email);     //one way of accessing data(not recommended)
console.log(JSUser["email"]);   //preferred way
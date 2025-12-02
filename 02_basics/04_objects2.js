//singleton or constructor ki help se declare karna
const tinderUser = new Object()
console.log(tinderUser);

//declaring properties
tinderUser.id = "123abc"
tinderUser.name = "Amogh"
tinderUser.isLoggedIn = false

console.log(tinderUser);

//object nesting 
const regularUser = {
    email : "amogh@gmail.com",
    fullname : {
        firstname : "Amogh",
        lastname : {
            middlename : "Kumar",
            last : "Dandotiya"
        }
    }
}

console.log(`The name of user is ${regularUser.fullname.firstname} ${regularUser.fullname.lastname.last}`);

//merging objects 
/*
const fullProfile = Object.assign({},tinderUser,regularUser);
console.log(fullProfile);
*/

//merging using spread
const fullProfile = {...regularUser,...tinderUser};
console.log(fullProfile);
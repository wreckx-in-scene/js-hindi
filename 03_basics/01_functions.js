function getSum(a,b){
    return a+b;
}

addition = (num1,num2)=>{
    return num1,num2;
}

let sum = getSum(2,7);
console.log(sum,addition(2,5));

loginGreeting = (username) => {
    if(!username){
        console.log("Enter a username !");
        return
    }

    return `${username} just logged into the app.`
}

let message = loginGreeting("Amogh")
console.log(message);

//using rest operator to take parameteres into the functions
function calculateCartPrice(...num1){
    let sum = 0;
    for(const num of num1){
        sum+=num
    }

    return sum;
}

console.log(`The cart total is : ${calculateCartPrice(200,500,600)} Rs.`);

//handling objects in functions 
const user = {
    name : "Amogh",
    email : "amoghdandotiya69@gmail.com",
    age : 21
}

objectHandler = (anyobject) => {        //anyobject is used to access any object
    console.log(`The name is ${anyobject.name} , is ${anyobject.age} years old , and his email is ${anyobject.email}`);
}

objectHandler(user);
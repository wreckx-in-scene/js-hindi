//Dates
let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

let newDate = new Date(2004 , 0 , 26 , 9 , 13);
console.log(newDate.toLocaleString());

// time 
let myTimestamp = Date.now();
console.log(myTimestamp);
console.log(newDate.getHours());
console.log(Math.floor(Date.now()/1000));

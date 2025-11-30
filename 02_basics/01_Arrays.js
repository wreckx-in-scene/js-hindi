//Arrays 

const myArr = [0,1,2,3,4]
console.log(myArr[2]);

//Array methods
//push and pop are very basic
myArr.unshift(5)
console.log(myArr);

const colors = ["red" , "yellow" , "blue"];
colors[5] = "purple"
console.log(colors);

const newArray = myArr.join();
console.log(newArray);

// slice and splice
const myn1 = myArr.slice(1,3);

console.log("A" , myArr);
console.log(myn1);
console.log("B" , myArr)    //After using slice

const myn2 = myArr.splice(1,3);
console.log("C " , myArr);      //after using splice
console.log(myn2);

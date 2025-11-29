let score = "33abc"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
// true => 1 ; false => 0

let isLoggedIn = "amogh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// 1 => true ; 0 => false
// "" => false
// "amogh" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);


// ***************Operations*******************

let str1 = "Amogh"
let str2 = " Dando"

console.log(str1 + str2);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);       // string comes first => all are treated as strings
console.log(1 + 2 + "2");       // if string comes at last => all operations are done normally before string




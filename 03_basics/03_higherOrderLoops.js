//for of loop
const arr = [1,2,3,4,5]
for (const it of arr) {
    console.log(it);
}

//applying for of on map ds
const mpp = new Map();
mpp.set('IN' , 'India')
mpp.set('USA' , "United Arab Emirates")
mpp.set('Fr' , "France")
mpp.set('IN' , "India")

console.log(mpp);

for (const [code,country] of mpp) {
    console.log(country);
}

// for of loop cannot be directly applied on objects in this way

//applying higher loops on objects 
const languages = {
    js : 'javascript',
    cpp : 'c++',
    py : 'python',
    java : 'java'
}

for (const key in languages) {
    console.log(`${key}, is a shortcut for : ${languages[key]}`);
}

//for in loop can also be used on arrays 
//but for in loop on using keys prints the indexes of array
//so to access the values to in the following manner 

const newArr = ["js","cpp","ruby","swift"]
for (const key in newArr) {
    console.log(newArr[key])
}

//for each loop
const guys = ['Amogh' , 'Sagar' , 'Amit' , 'Aarab']
guys.forEach((iter) => {
    console.log(`guy number ${i+1} is ${iter}`)
    i++;
})
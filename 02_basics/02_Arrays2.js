const marvel_heros = ["Thor" , "Ironman" , "Spiderman"]
const dc_heros = ["superman" , "batman" , "flash"]

//merging two arrays 
const allHeros = marvel_heros.concat(dc_heros);
console.log(allHeros);

//merging using spread
const allNewHeros = [...marvel_heros , ...dc_heros]     //spreads the elements of both the arrays as indivisual elements
console.log(allNewHeros);

//flattening complex array data
const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

//converting other ds to arrays (data manipulation)
//console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));

//an interesting case ---> for future
console.log(Array.from({name : "Amogh"}));  //returns an empty array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));    //similar hai from ke jaise
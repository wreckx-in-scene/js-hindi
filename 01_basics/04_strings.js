const name = "Amogh"
const repoCount = 50

console.log(name + repoCount + " Value");   //outdated method
console.log(`Hello my name is  ${name} , I have ${repoCount} repos on gitHub. `);   //the modern way

const gameName = new String("wreckxhere")

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(4));
console.log(gameName.indexOf('x'));

const newString = gameName.substring(0,5);
console.log(newString);

const anotherString = gameName.slice(-2,4);
console.log(anotherString);

const newStringOne = "   Amogh _wants _to _remove _spaces  "
console.log(newStringOne.replace(/\s+/g, " "));

const url = "https://curly-space-broccoli-q74rwgx7j7q365pg.github.dev/"

console.log(url.replaceAll('-' , '%20'));
console.log(url.includes('sundar'));

const str = "Amogh-is-wreckx"
console.log(str.split("-"));

  
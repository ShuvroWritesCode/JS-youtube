const name = "Shuvro"
const repoCount = 50

console.log(name + " " + repoCount);
// modern syntax
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Shuvro')
console.log(gameName);
console.log(gameName[0]);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('o'));
console.log(gameName.indexOf('l'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const anotherStringTwo = "    Shuvro    "
console.log(anotherStringTwo.trim());

const url ="https://ShuvroWritesCode.com/shuvro%20writes%20code"
console.log(url.replace('%20', '-'));

console.log(url.includes('shuvro'));

console.log(gameName.split('r'));
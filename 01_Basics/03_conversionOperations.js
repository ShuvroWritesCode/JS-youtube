let score = "33abc"

console.log(typeof score);
console.log(typeof(score))

let valueInNumber = Number(score)
console.log(typeof valueInNumber); // Number
console.log(valueInNumber); // NaN

// "33" => 33
// "33abc" => NaN
// true => 1 , false => 0

let isLoggedIn = ""
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true, 0 => false
// "" => false, " " => true
// "ShuvroWritesCode" => true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber); // 33
console.log(typeof stringNumber); // string

let num1, num2, num3
num1 = num2 = num3 = 2+2
console.log(num1);
console.log(num2);
console.log(num3);

let gameCounter = 100
gameCounter++
console.log(gameCounter);

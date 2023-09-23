const score = 400
console.log(score);
const balance = new Number(100.9348592)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));
console.log(balance.toPrecision(4));

const hundreds = 10000000
console.log(hundreds.toLocaleString('en-IN'));

console.log(Number.MAX_VALUE);


// ****************************** Math ******************************

console.log(Math);
console.log(typeof Math);
console.log(Math.abs(-4));
console.log(Math.round(4.2));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(2, 7, 1, 4, 9));

console.log(Math.random); // value will always be in between 0 and 1

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
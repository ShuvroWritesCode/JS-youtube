"use strict"

// Dates and Time

let myDate = new Date()

console.log(myDate);
console.log(myDate.toString());
console.log(myDate.getDate());
console.log(myDate.getDay());
console.log(myDate.toLocaleString());

let myCreatedDate = new Date(2023, 11, 23) // Month index starts from 0
let anotherCreatedDate = new Date("01-04-2023") 
console.log(myCreatedDate);
console.log(myCreatedDate.toDateString());
console.log(anotherCreatedDate);

let myTimeStamp = Date.now()
console.log(myTimeStamp);

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday: "long",
})
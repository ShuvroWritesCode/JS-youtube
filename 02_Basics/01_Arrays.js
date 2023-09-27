"use strict"

const MyArr = [0, 1, 2, 3, 4, 'hitesh', true]
const MyArr2 = ['ironman', 'superman', 'hulk']
const MyArr3 = new Array(1, 2, 3, 4, 5)

console.log(MyArr[0]);

// Array Methods
MyArr.push(6)
console.log(MyArr);
MyArr.push(7)
console.log(MyArr);
MyArr.pop()
MyArr.unshift(9)
console.log(MyArr);
console.log(MyArr.includes(9));
console.log(MyArr.indexOf(9));

const MyArr4 = MyArr.join()
console.log(MyArr4);
console.log(typeof(MyArr4));

// slice vs splice
const MyArray = new Array(0, 1, 2, 3, 4, 5)
console.log("1 " , MyArray);
const slicedArr = MyArray.slice(1, 3)
console.log("2 " , MyArray);
console.log(slicedArr);

const splicedArr = MyArray.splice(1, 3)
console.log("3 " , MyArray);
console.log(splicedArr);

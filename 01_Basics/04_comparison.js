"use strict"

console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);

// make sure to avoid these type of data type conflicts in comparison
console.log("0" > 1);
console.log("02" > 1);

console.log(null > 0);
console.log(null >= 0);
console.log(null < 0);
console.log(null == 0);
console.log(null != 0);

console.log(undefined > 0);
console.log(undefined >= 0);
console.log(undefined < 0);
console.log(undefined == 0);
console.log(undefined != 0);

/* 
    The == operator performs a loose equality comparison that performs type coercion if necessary to make the comparison possible. The === operator, on the other hand, performs a strict equality comparison that does not perform type coercion and requires the operands to have the same type (as well as the same value).
*/

console.log("2" === 2);
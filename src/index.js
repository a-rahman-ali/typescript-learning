"use strict";
// var:
// var username: string = "John";
// // document.write(`Hello ${username}`);
// console.log(`Hello ${username}`);
// function Demo() {
//     var x;
//     x = 10;
//     if (x == 10) {
//         var y = 20;
//         var y = 30; // shadowing
//     }
//     console.log("x = " + x + "\n" + "y = " + y);
// }
// Demo();
// x = 10;
// console.log("x = " + x);
// var x; // hoisting
// let:
// function Demo() {
//     let x;
//     x = 10;
//     if (x == 10) {
//         let y = 20;
//         y = 30; // assignment allowed
//         // let y = 30; // shadowing - not allowed
//         console.log("x = " + x + "\ny = " + y);
//     }
//     // console.log("x = " + x + "\ny = " + y); // cannot find y
// }
// Demo();
// const:
// const x;	// invalid
// x = 10;		// invalid
// const y = 10; 	// valid
// y = 20;		// invalid
// var x;
// x = 10;
// x = "John";
// var y = 20;
// y = "John"; // this gives error.
// <-------- -------->
// var price: number = 3400.56;
// var rate: number = 2e3;		// [2000]
// var bit: number = 0b1010;	// [10]
// console.log("\nprice = " + price);
// console.log("\nrate = " + rate);
// console.log("\nbit = " + bit);
// const bit: number = 0b10101;
// const exp: number = 2e3;
// console.log("Bit=" + bit + "\t" + "Exponent=" + exp);
// // Bit=10	Exponent=2000
// console.log(`Min possible number ${Number.MIN_VALUE}`);
// console.log(`Min safe integer ${Number.MIN_SAFE_INTEGER}`);
// console.log(`Max possible number ${Number.MAX_VALUE}`);
// console.log(`Max safe integer ${Number.MAX_SAFE_INTEGER}`);
// console.log(`Positive infinity ${Number.POSITIVE_INFINITY}`);
// console.log(`Negative infinity ${Number.NEGATIVE_INFINITY}`);
// console.log(`NaN ${Number.NaN}`);
// var username: string = "John";
// var age: number = 23;
// var msg1: string = "Hello !" + " " + username + " " + "you will be" + " " + (age + 1) + " " + "next year";
// var msg2: string = `Hello ! ${username} you will be ${age + 1} next year`;
// console.log(msg1);
// console.log(msg2);
function getUpperCase(username) {
    return username.toUpperCase();
}
console.log(getUpperCase("Typescript"));
console.log(getUpperCase("4"));

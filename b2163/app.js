const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(" ");
const X = Number(input[0]);
const Y = Number(input[1]);
let output = X * Y - 1;
console.log(output);

// let output = 0;

// if (X >= Y) {
//   output += X - 1 + (Y - 1) * X;
// } else if (X < Y) {
//   output += Y - 1 + (X - 1) * Y;
// }

// console.log(output);

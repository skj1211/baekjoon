const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

// const N = input.shift();
// const A = input.shift().trim().split(" ");
// const M = input.shift();
// const B = input.shift().trim().split(" ");

// const map = new Map();
// const output = [];
// for (num of A) {
//   map.set(num);
// }
// for (num of B) {
//   if (map.has(num)) {
//     output.push(1);
//   } else {
//     output.push(0);
//   }
// }
// console.log(output.join("\n"));

const N = input.shift();
const A = new Set(input.shift().trim().split(" "));
const M = input.shift();
const B = input.shift().trim().split(" ");

const output = [];

for (num of B) {
  if (A.has(num)) {
    output.push(1);
  } else {
    output.push(0);
  }
}
console.log(output.join("\n"));

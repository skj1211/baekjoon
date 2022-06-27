const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
input = input[0].split(" ").map((el) => +el);
// let M = 0;
// let count = 0;
const A = input[0];
const B = input[1];
const V = input[2];
// while (M < V) {
//   M = M + A;
//   if (M >= V) {
//     count++;
//     break;
//   }
//   M = M - B;
//   count++;
// }
// console.log(count);
console.log(Math.ceil((V - B) / (A - B)));

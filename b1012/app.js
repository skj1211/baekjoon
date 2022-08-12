const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const T = input.shift();
console.log(T);

console.log(input);
const [M, N, K] = input.shift().split(" ").map(Number);

const arr = Array.from({ length: N }).map((row) => (row = Array.from({ length: M }).fill(0)));
const test = new Array(10).map((el) => (el = Array(8))).fill(0);
console.log(test);

// console.log(arr);

for (let i = 0; i < T; i++) {
  for (let j = 0; j < K; j++) {}
}

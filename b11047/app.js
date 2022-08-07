const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let [N, K] = input
  .shift()
  .split(" ")
  .map((el) => +el);
input = input.map((el) => +el);
let count = 0;

for (let i = N - 1; i >= 0; i--) {
  if (K >= input[i]) {
    K -= input[i];
    count++;
    i++;
  }
}

console.log(count);

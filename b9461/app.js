const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const T = Number(input.shift());
input = input.map(Number);
const arr = [1, 1, 1, 2, 2];
const max = Math.max(...input);

for (let i = 5; i < max; i++) {
  arr[i] = arr[i - 1] + arr[i - 5];
  output = arr[i];
}
for (let i = 0; i < T; i++) {
  console.log(arr[input[i] - 1]);
}

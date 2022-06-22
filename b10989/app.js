const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .split("\n")
  .map((el) => +el);

let N = input.shift();
input.sort((a, b) => a - b);

for (i = 0; i < N; i++) {
  console.log(input[i]);
}

//백준에서 채점 불가한 문제

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const [N, M] = input.shift().split(" ");
input = input[0]
  .split(" ")
  .map((el) => +el)
  .sort((a, b) => b - a);

let max = input[0];
let min = 1;

while (min <= max) {
  let length = 0;
  let mid = Math.floor((max + min) / 2);

  for (let i = 0; i < N; i++) {
    if (input[i] >= mid) {
      length += input[i] - mid;
    }
  }
  if (length >= M) {
    min = mid + 1;
  } else {
    max = mid - 1;
  }
}

console.log(max);

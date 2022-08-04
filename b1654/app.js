const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const [K, N] = input.shift().split(" ");
input = input.map((el) => +el).sort((a, b) => b - a);

let max = input[0];
let min = 1;

while (min <= max) {
  let mid = Math.floor((max + min) / 2);
  let count = 0;

  for (let i = 0; i < K; i++) {
    count += Math.floor(input[i] / mid);
  }

  if (count >= N) {
    min = mid + 1;
  } else {
    max = mid - 1;
  }
}
console.log(max);

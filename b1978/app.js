const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
const N = input.shift();
input = input[0].split(" ").map((el) => +el);
const output = [];

for (i = 0; i < N; i++) {
  const number = input[i];
  let count = 0;
  for (j = 1; j <= number; j++) {
    if (number % j == 0) {
      count++;
    }
  }
  if (count === 2) {
    output.push(number);
  }
}

console.log(output.length);

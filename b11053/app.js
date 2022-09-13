const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const A = Number(input.shift());
input = input[0].split(" ").map(Number);
const count = new Array(A).fill(0);

for (let i = 0; i < A; i++) {
  let max = 0;
  for (let j = 0; j < i; j++) {
    if (input[j] < input[i] && max < count[j]) {
      max = count[j];
    }
  }
  count[i] = max + 1;
}
console.log(Math.max(...count));

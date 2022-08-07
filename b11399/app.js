const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = input.shift();
input = input[0].split(" ").map((el) => +el);

let totalTime = 0;
// const totalTime = [];

input.sort((a, b) => a - b);

for (let i = 0; i < N; i++) {
  for (let j = i; j >= 0; j--) {
    totalTime += input[j];
  }
}
console.log(totalTime);

// const result = totalTime.reduce((sum, currValue) => {
//   return sum + currValue;
// });
// console.log(result);

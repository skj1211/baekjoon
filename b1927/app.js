const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = input.shift();
input = input.map((el) => +el);
const arr = [];

for (let i = 0; i < N; i++) {
  if (input[i] === 0) {
    if (arr.length === 0) {
      console.log(0);
    } else {
      const min = Math.min(...arr);
      console.log(min);
    }
  } else {
    arr.push(input[i]);
  }
}

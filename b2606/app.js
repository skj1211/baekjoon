const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = Number(input.shift());
const pair = Number(input.shift());

const arr = new Array(N).fill(0);
arr[0] = 1;
for (let i = 0; i < pair; i++) {
  for (let j = 0; j < pair; j++) {
    const [num1, num2] = input[j].split(" ").map((el) => +el);

    if (arr[num1 - 1] === 1 || arr[num2 - 1] === 1) {
      arr[num1 - 1] = 1;
      arr[num2 - 1] = 1;
    }
  }
}
console.log(arr.reduce((a, b) => a + b) - 1);

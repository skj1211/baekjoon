const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
input = Number(input[0]);

let sum = 0;
let count = 0;
for (i = 1; sum <= input; i++) {
  sum += i;
  count++;
}
console.log(count - 1);

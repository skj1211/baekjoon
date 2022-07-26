const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");
const N = input.shift();
input = Number(input[0]);
const number = [];
const output = [];

for (let i = 1; i <= N; i++) {
  number.push(i);
}

while (number.length !== 0) {
  for (let i = 1; i < input; i++) {
    number.push(number.shift());
  }
  output.push(number.shift());
}
console.log(`<${output.join(", ")}>`);

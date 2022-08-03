const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
input = input.map((el) => +el);
const N = input.shift();

const stack = [];
const output = [];
let toggle = true;
let count = 1;

for (let i = 0; i < N; i++) {
  while (count <= input[i]) {
    stack.push(count);
    count++;
    output.push("+");
  }
  const popNum = stack.pop();
  output.push("-");
  if (popNum !== input[i]) {
    console.log("NO");
    toggle = !toggle;
    break;
  }
}
if (toggle) {
  console.log(output.join("\n"));
}

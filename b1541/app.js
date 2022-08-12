const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();
const num = input.split("-");

for (let i = 0; i < num.length; i++) {
  const plus = num[i].split("+").map(Number);
  let sum = 0;
  for (let j = 0; j < plus.length; j++) {
    sum += plus[j];
  }
  num[i] = sum;
}

let output = num[0];
for (let i = 1; i < num.length; i++) {
  output -= num[i];
}
console.log(output);

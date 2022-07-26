const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();
input = Number(input);
let number = 665;

while (input !== 0) {
  number++;
  if (String(number).includes("666")) {
    input--;
  }
}

console.log(number);

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
input = Number(input[0]);

let number = 2;

while (input >= number) {
  if (input % number !== 0) {
    number++;
    continue;
  }
  if (input % number === 0) {
    input = input / number;
  }
  console.log(number);
}

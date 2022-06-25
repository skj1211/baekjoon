const fs = require("fs");
const { arrayBuffer } = require("stream/consumers");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
input = input[0].split(" ").map((el) => +el);
const output = [];
const num = [];

for (i = 1; i <= input[0]; i++) {
  num.push(i);
}

while (num.length > 0) {
  for (i = 1; i < input[1]; i++) {
    num.push(num.shift());
  }
  output.push(num.shift());
}
console.log(`<${output.join(", ")}>`);

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
input = input.map((el) => +el);
const N = input.shift();

const output = input.sort((a, b) => a - b);

console.log(output.join("\n"));

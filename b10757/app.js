const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(" ");
const A = BigInt(input[0]);
const B = BigInt(input[1]);
const sum = A + B;
console.log(String(sum));

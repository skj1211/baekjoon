const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
const N = Number(input.shift());
console.log(
  [...new Set(input.sort().sort((a, b) => a.length - b.length))]
    .join("\n")
    .trim()
);

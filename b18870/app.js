const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = Number(input.shift());
input = input[0].split(" ").map(Number);

const compress = [...new Set(input)].sort((a, b) => a - b);
compress.sort((a, b) => a - b);

const map = new Map();

for (let i = 0; i < compress.length; i++) {
  map.set(compress[i], i);
}

let output = "";
for (let i = 0; i < n; i++) {
  output += `${map.get(input[i])} `;
}
console.log(output);

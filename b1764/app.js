const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, m] = input.shift().split(" ").map(Number);
const total = n + m;
input = input.map((el) => el.trim());

const nSet = new Set();
const mSet = new Set();

for (let i = 0; i < total; i++) {
  if (i < n) {
    nSet.add(input[i]);
  } else {
    mSet.add(input[i]);
  }
}
const output = [];

mSet.forEach((el) => {
  if (nSet.has(el)) {
    output.push(el);
  }
});

output.sort();
console.log(output.length);
console.log(output.join("\n"));

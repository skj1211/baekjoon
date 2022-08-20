const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, m] = input.shift().split(" ").map(Number);
let map = new Map();
for (let i = 0; i < n; i++) {
  const [key, value] = input[i].split(" ").map((el) => el.trim());
  map.set(key, value);
}

for (let i = n; i < input.length; i++) {
  const key = String(input[i].trim());
  console.log(map.get(key));
}

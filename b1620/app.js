const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, m] = input.shift().split(" ").map(Number);
input = input.map((el) => el.trim());
const poketmonName = new Map();
const poketmonNum = new Map();

for (let i = 0; i < n; i++) {
  poketmonName.set(input[i], i + 1);
  poketmonNum.set(i + 1, input[i]);
}

for (let i = n; i < n + m; i++) {
  if (input[i] > 0) {
    console.log(poketmonNum.get(Number(input[i])));
  } else {
    console.log(poketmonName.get(input[i]));
  }
}

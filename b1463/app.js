const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString();
const X = Number(input);
const DP = new Array(X + 1).fill(0);

for (let i = 2; i <= X; i++) {
  DP[i] = DP[i - 1] + 1;

  if (i % 2 === 0) {
    DP[i] = Math.min(DP[i], DP[i / 2] + 1);
  }

  if (i % 3 === 0) {
    DP[i] = Math.min(DP[i], DP[i / 3] + 1);
  }
}

console.log(DP[X]);

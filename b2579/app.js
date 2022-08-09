const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = Number(input.shift());
input = input.map((el) => +el);

const dp = new Array(N + 1);
dp[1] = input[0];
dp[2] = input[0] + input[1];
dp[3] = Math.max(input[0], input[1]) + input[2];

for (let i = 4; i <= N; i++) {
  dp[i] = Math.max(dp[i - 3] + input[i - 2] + input[i - 1], dp[i - 2] + input[i - 1]);
}
console.log(dp[N]);

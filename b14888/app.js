const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
const N = +input[0];
const nums = input[1].split(" ").map(Number);
const op = input[2].split(" ").map(Number);
let max = -1000000000;
let min = 1000000000;

function devide(a, b) {
  let mul = 1;
  if (a < 0) mul = -1;
  return Math.floor(Math.abs(a) / b) * mul;
}
function dfs(n, res) {
  if (n === N) {
    max = Math.max(max, res);
    min = Math.min(min, res);
    return;
  }
  for (let i = 0; i < 4; i++) {
    if (op[i] > 0) {
      op[i]--;
      if (i === 0) {
        dfs(n + 1, res + nums[n]);
      } else if (i === 1) {
        dfs(n + 1, res - nums[n]);
      } else if (i === 2) {
        dfs(n + 1, res * nums[n]);
      } else if (i === 3 && nums[n] != 0) {
        op[3]--;
        dfs(n + 1, devide(res, nums[n]));
        op[3]++;
      }
      op[i]++;
    }
  }
}
dfs(1, nums[0]);
if (max === -0) max = 0;
if (min === -0) min = 0;
console.log(max);
console.log(min);

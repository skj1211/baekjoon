const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, m] = input.shift().split(" ").map(Number);
const visited = new Array(n);
const output = [];
let result = "";

function dfs(idx, cnt) {
  if (cnt === m) {
    result += `${output.join(" ")}\n`;
    return;
  }

  for (let i = idx; i < n; i++) {
    if (visited[i] === true) continue;
    visited[i] = true;
    output.push(i + 1);
    dfs(i, cnt + 1);
    output.pop();
    visited[i] = false;
  }
}

dfs(0, 0);
console.log(result);

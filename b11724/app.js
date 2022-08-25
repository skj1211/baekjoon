const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, m] = input.shift().split(" ").map(Number);
const graph = [];
const visited = new Array(n + 1).fill(0);
for (let i = 1; i <= n; i++) {
  graph[i] = [];
}
for (let i = 0; i < m; i++) {
  const [from, to] = input[i].split(" ").map(Number);
  graph[from].push(to);
  graph[to].push(from);
}

function DFS(start) {
  visited[start] = 1;
  for (let i = 0; i < graph[start].length; i++) {
    let next = graph[start][i];
    if (visited[next] === 0) {
      DFS(next);
    }
  }
}

let output = 0;
for (let i = 1; i <= n; i++) {
  if (visited[i] === 0) {
    DFS(i);
    output++;
  }
}
console.log(output);

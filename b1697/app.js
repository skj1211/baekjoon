const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, k] = input.shift().split(" ").map(Number);
const visited = Array(100001).fill(0);

function BFS(start) {
  const queue = [[start, 0]];

  while (queue.length) {
    const [node, time] = queue.shift();
    if (visited[node]) {
      continue;
    }
    visited[node] = 1;
    if (node === k) {
      console.log(time);
      break;
    }
    if (node * 2 < 100001) {
      queue.push([node * 2, time + 1]);
    }
    if (node + 1 < 100001) {
      queue.push([node + 1, time + 1]);
    }
    if (node - 1 >= 0) {
      queue.push([node - 1, time + 1]);
    }
  }
}

BFS(n);

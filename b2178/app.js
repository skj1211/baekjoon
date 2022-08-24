const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, m] = input.shift().split(" ").map(Number);
input = input.map((el) => el.trim().split("").map(Number));

const moveX = [0, 0, 1, -1];
const moveY = [1, -1, 0, 0];
const visited = [];
for (let i = 0; i < n; i++) {
  visited.push(new Array(m).fill(0));
}

function BFS(x, y) {
  const queue = [];
  queue.push([x, y]);
  visited[x][y] = 1;
  while (queue.length) {
    const [x, y] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + moveX[i], y + moveY[i]];
      if (nx >= 0 && ny >= 0 && nx < n && ny < m) {
        if (input[nx][ny] === 1 && visited[nx][ny] === 0) {
          queue.push([nx, ny]);
          visited[nx][ny] = visited[x][y] + 1;
        }
      }
    }
  }
}

BFS(0, 0);
console.log(visited[n - 1][m - 1]);

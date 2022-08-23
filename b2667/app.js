const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = Number(input.shift());
input = input.map((el) => el.trim().split("").map(Number));

let num = 0;
const output = [];
const moveX = [0, 0, 1, -1];
const moveY = [1, -1, 0, 0];

//////////////DFS///////////////////
// for (let i = 0; i < N; i++) {
//   for (let j = 0; j < N; j++) {
//     if (input[i][j] === 1) {
//       DFS(i, j);
//       output.push(num);
//       num = 0;
//     }
//   }
// }

// function DFS(x, y) {
//   if (x >= 0 && y >= 0 && x < N && y < N) {
//     if (input[x][y] === 1) {
//       input[x][y] = 0;
//       num++;
//       for (let i = 0; i < 4; i++) {
//         DFS(x + moveX[i], y + moveY[i]);
//       }
//     }
//   }
// }
// output.sort((a, b) => a - b);
// console.log(output.length);
// console.log(output.join("\n"));

//////////BFS////////
const visited = [];
for (let i = 0; i < N; i++) {
  visited.push(new Array(N).fill(0));
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (input[i][j] === 1 && visited[i][j] === 0) {
      BFS(i, j);
      output.push(num);
      num = 0;
    }
  }
}

function BFS(x, y) {
  const queue = [];
  queue.push([x, y]);
  while (queue.length) {
    const target = queue.shift();
    x = target[0];
    y = target[1];
    if (visited[x][y] === 0) {
      visited[x][y] = 1;
      num++;
      for (let i = 0; i < 4; i++) {
        if (x + moveX[i] >= 0 && y + moveY[i] >= 0 && x + moveX[i] < N && y + moveY[i] < N) {
          if (input[x + moveX[i]][y + moveY[i]] === 1) {
            queue.push([x + moveX[i], y + moveY[i]]);
          }
        }
      }
    }
  }
}

output.sort((a, b) => a - b);
console.log(output.length);
console.log(output.join("\n"));

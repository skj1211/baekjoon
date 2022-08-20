const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
const [n, m, v] = input.shift().split(" ").map(Number);
const graph = [...Array(n + 1)].map((el) => []);

for (let i = 0; i < m; i++) {
  const [from, to] = input[i].split(" ").map(Number);
  graph[from].push(to);
  graph[to].push(from);
}
graph.forEach((element) => {
  element.sort((a, b) => a - b);
});

let visited = new Array(n + 1).fill(0);
let answer_dfs = [];
function DFS(v) {
  if (visited[v]) retrun;
  visited[v] = 1;
  answer_dfs.push(v);
  for (let i = 0; i < graph[v].length; i++) {
    const next = graph[v][i];
    if (visited[next] === 0) {
      DFS(next);
    }
  }
}
DFS(v);
console.log(answer_dfs.join(" "));
visited.fill(0);

let answer_bfs = [];
function BFS(v) {
  let queue = [v];
  while (queue.length) {
    let x = queue.shift();
    if (visited[x] === 1) {
      continue;
    }
    visited[x] = 1;
    answer_bfs.push(x);
    for (let i = 0; i < graph[x].length; i++) {
      let next = graph[x][i];
      if (visited[next] === 0) {
        queue.push(next);
      }
    }
  }
}
BFS(v);
console.log(answer_bfs.join(" "));

//////////////////////////////////////////
// let [n, m, v] = input[0].split(" ").map(Number);
// let graph = new Array(n + 1);
// for (let i = 0; i < graph.length; i++) {
//   graph[i] = [];
// }
// for (let i = 0; i < m; i++) {
//   let [from, to] = input[i + 1].split(" ").map(Number);
//   graph[from].push(to);
//   graph[to].push(from);
// }
// graph.forEach((element) => {
//   element.sort((a, b) => a - b);
// });

// let visited = new Array(n + 1).fill(0);
// let answer_dfs = [];

// // DFS
// function DFS(v) {
//   if (visited[v]) return;
//   visited[v] = 1;
//   answer_dfs.push(v);
//   for (let i = 0; i < graph[v].length; i++) {
//     let next = graph[v][i];
//     if (visited[next] === 0) {
//       DFS(next);
//     }
//   }
// }
// DFS(v);
// console.log(answer_dfs.join(" "));

// // BFS
// let answer_bfs = [];
// visited.fill(0);
// function BFS(v) {
//   let queue = [v];
//   while (queue.length) {
//     let x = queue.shift();
//     if (visited[x] === 1) {
//       continue;
//     }
//     visited[x] = 1;
//     answer_bfs.push(x);
//     for (let i = 0; i < graph[x].length; i++) {
//       let next = graph[x][i];
//       if (visited[next] === 0) {
//         queue.push(next);
//       }
//     }
//   }
// }
// BFS(v);
// console.log(answer_bfs.join(" "));

//https://velog.io/@ywc8851/%EB%B0%B1%EC%A4%80-1260-DFS%EC%99%80-BFS-javascript

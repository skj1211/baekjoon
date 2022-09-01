const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const [m, n] = input.shift().split(" ").map(Number);
input = input.map((el) => el.split(" ").map(Number));
let count = 0;

const moveX = [0, 0, 1, -1];
const moveY = [1, -1, 0, 0];
const queue = [];
const box = [];
console.log(input);
for (let i = 0; i < n; i++) {
  //   const arr = input[i].split(" ").map((v) => +v);
  //   box.push(arr); // 각 행의 토마토 정보 배열를 박스 행렬에 담는다.
  let idx = -1;
  while (true) {
    // 박스에서 익은 토마토가 있다면 좌표를 queue에 넣어준다.
    idx = input.indexOf[i](1, idx + 1);
    if (idx === -1) break;
    queue.push([i - 1, idx]);
  }
}
console.log(input);
console.log(box);
console.log(queue);

function BFS() {}

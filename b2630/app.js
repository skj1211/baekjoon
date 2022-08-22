const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = Number(input.shift());
input = input.map((el) => el.trim().split(" ").map(Number));

let white = 0;
let blue = 0;

function division(x, y, n) {
  let count = 0;
  for (let i = x; i < x + n; i++) {
    for (let j = y; j < y + n; j++) {
      if (input[i][j]) {
        count++;
      }
    }
  }
  if (count === 0) {
    white++;
  } else if (count === n * n) {
    blue++;
  } else {
    division(x, y, n / 2);
    division(x + n / 2, y, n / 2);
    division(x, y + n / 2, n / 2);
    division(x + n / 2, y + n / 2, n / 2);
  }
}
division(0, 0, N);
console.log(white);
console.log(blue);

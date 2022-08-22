const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = Number(input.shift());
input = input.map((el) => el.trim().split(" ").map(Number));
const output = [0, 0, 0];

function division(x, y, n) {
  const first = input[x][y];
  let same = true;

  for (let i = x; i < x + n; i++) {
    for (let j = y; j < y + n; j++) {
      if (input[i][j] !== first) {
        same = false;
        break;
      }
    }
    if (!same) {
      break;
    }
  }
  if (same) {
    output[first + 1]++;
  } else {
    n /= 3;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        division(x + i * n, y + j * n, n);
      }
    }
  }
}
division(0, 0, N);
console.log(output.join("\n"));

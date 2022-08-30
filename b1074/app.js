const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, r, c] = input[0].split(" ").map(Number);
const center = Math.pow(2, n) / 2;
let count = 0;

function Z(N, x, y) {
  if (N === 0) {
    console.log(count);
    return;
  }
  const size = Math.floor(Math.pow(2, N - 1) / 2);
  const skip = Math.pow(4, N - 1);
  if (r < x && c < y) {
    Z(N - 1, x - size, y - size);
  }
  if (r < x && c >= y) {
    count += skip;
    Z(N - 1, x - size, y + size);
  }
  if (r >= x && c < y) {
    count += skip * 2;
    Z(N - 1, x + size, y - size);
  }
  if (r >= x && c >= y) {
    count += skip * 3;
    Z(N - 1, x + size, y + size);
  }
}

Z(n, center, center);

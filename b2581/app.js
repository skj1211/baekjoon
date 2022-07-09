const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
const M = Number(input[0]);
const N = Number(input[1]);
const output = [];

for (i = M; i <= N; i++) {
  let count = 0;
  for (j = 1; j <= i; j++) {
    if (i % j === 0) {
      count++;
    }
    if (count >= 3) {
      break;
    }
  }
  if (count === 2) {
    output.push(i);
  }
}

if (output.length < 1) {
  console.log(-1);
} else {
  const total = output.reduce((sum, curValue) => {
    return sum + curValue;
  }, 0);
  console.log(total);
  console.log(Math.min(...output));
}

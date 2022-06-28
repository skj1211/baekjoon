const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
const T = Number(input.shift());

for (i = 0; i < T; i++) {
  const K = Number(input.shift());
  const N = Number(input.shift());
  let residents = [];

  for (let j = 0; j <= T; j++) {
    residents.push([1]);
    for (let k = 1; k <= N; k++) {
      if (j == 0) {
        residents[j].push(k + 1);
      } else {
        residents[j].push(residents[j][k - 1] + residents[j - 1][k]);
      }
    }
  }
  const floor = K;
  const room = N - 1;
  console.log(residents[floor][room]);
}

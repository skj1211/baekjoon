const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
let N = Number(input);
let sum = 1;
let i = 1;
while (sum < N) {
  sum += 6 * i;
  i++;
}
console.log(i);

//백준에서 계속 틀림 뭐가 틀렸는지 발견 못함

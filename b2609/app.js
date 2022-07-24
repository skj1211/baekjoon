const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [a, b] = fs.readFileSync(filePath).toString().trim().split(" ");
let i = a;
let j = b;
//유클리드 호제법으로 최대공약수를 구함
// 최소공배수 = a*b/최대공약수

while (i % j !== 0) {
  const n = i % j;
  if (i % j !== 0) {
    i = j;
    j = n;
  }
  console.log(n);
}

console.log(j);
console.log((a * b) / j);

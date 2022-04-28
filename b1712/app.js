const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
input = input[0].split(" ").map((e) => +e);
const a = input[0];
const b = input[1];
const c = input[2];

const count = Math.floor(a / (c - b)) + 1;
if (c - b <= 0) {
  console.log(-1);
} else {
  console.log(count);
}
//아래도 결과는 나오지만 백준에선 실패... 좋지 않은 방법임
// let num = 1;
// while (true) {
//   if (b >= c) {
//     num = -1;
//     break;
//   }
//   if (a + b * num < c * num) {
//     count = num;
//     break;
//   }
//   num++;
// }
// console.log(num);

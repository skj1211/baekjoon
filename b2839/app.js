const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
let N = Number(input[0]);
let count = 0;

while (true) {
  if (N % 5 === 0) {
    console.log(N / 5 + count);
    break;
  }
  if (0 > N) {
    console.log(-1);
    break;
  }
  count++;
  N -= 3;
}

//다른 풀이
// let result = -1;

// let five = Math.floor(input / 5);
// while (five >= 0) {
//   const remain = input - five * 5;
//   if (remain % 3 === 0) {
//     result = remain / 3 + five;
//     break;
//   } else {
//     five -= 1;
//   }
// }
// console.log(result);

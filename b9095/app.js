const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const T = input.shift();
input = input.map((el) => +el);
const arr = [0, 1, 2, 4];

// for (let i = 0; i < T; i++) {
//   const num = input[i];
//   for (let j = 4; j <= num; j++) {
//     arr[j] = arr[j - 1] + arr[j - 2] + arr[j - 3];
//   }
//   console.log(arr[num]);
// }

////첫번째/////
const n = 11;
for (let i = 4; i < n; i++) {
  arr[i] = arr[i - 1] + arr[i - 2] + arr[i - 3];
}
for (let i = 0; i < T; i++) {
  console.log(arr[input[i]]);
}

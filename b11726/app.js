const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();
const arr = [1, 1];

for (let i = 2; i <= input; i++) {
  arr[i] = (arr[i - 1] + arr[i - 2]) % 10007;
}
console.log(arr[input]);

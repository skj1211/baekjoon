const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = Number(input.shift());
const arr = [];

input.map((el) => {
  if (el != 0) {
    arr.push(el);
  } else {
    arr.pop();
  }
});

///1번째 완료///
const num = 0;
const res = arr.map((el) => +el).reduce((a, b) => a + b, num);
console.log(res);

///2번째 완료///
// let output = 0;
// for (number of arr) {
//   output += Number(number);
// }
// console.log(output);

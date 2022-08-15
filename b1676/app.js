const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

let count = 0;
for (let i = 2; i <= input; i++) {
  if (i % 5 == 0) count++;
  if (i % 25 == 0) count++;
  if (i % 125 == 0) count++;
}
console.log(count);
///////////////////////////////////////////////////

// const num1 = parseInt(input / 5);
// const num2 = parseInt(input / 25);
// const num3 = parseInt(input / 125);

// console.log(num1 + num2 + num3);

////////////////오답///////////////////////////////////
//오답 input 값에 따라 num의 값이 표현 못하게 커짐
// let num = 1;
// for (let i = 2; i <= input; i++) {
//   num = num * i;
// }

// num = String(num);

// let count = 0;
// for (let i = num.length - 1; i >= 0; i--) {
//   if (num[i] == 0) {
//     count++;
//   } else {
//     break;
//   }
// }
// console.log(count);

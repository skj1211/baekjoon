const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n")[0].split(" ");
const x = Number(input[0]);
const y = Number(input[1]);
const w = Number(input[2]);
const h = Number(input[3]);

const output = Math.min(x, y, w - x, h - y);
console.log(output);

// function xCoordinate() {
//   if (w - x > x) {
//     return x;
//   } else if (w - x < x) {
//     return w - x;
//   }
// }
// function yCoordinate() {
//   if (h - y > y) {
//     return y;
//   } else if (h - y < y) {
//     return h - y;
//   }
// }
// if (xCoordinate() > yCoordinate()) {
//   console.log(yCoordinate());
// } else {
//   console.log(xCoordinate());
// }

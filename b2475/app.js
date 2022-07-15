const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n")[0].split(" ");
// input = input.map((el) => +el);
// let total = 0;
// for (i = 0; i < 5; i++) {
//   total += Math.pow(input[i], 2);
// }
// console.log(total % 10);

let total = 0;
input = input.map((el) => (total += Math.pow(el, 2)));
console.log(total % 10);

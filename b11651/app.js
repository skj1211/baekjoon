const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
input = input.map((el) => el.split(" ").map((el) => +el));
const N = input.shift();
let output = "";

input
  .sort((a, b) => {
    if (a[1] !== b[1]) {
      return a[1] - b[1];
    } else {
      return a[0] - b[0];
    }
  })
  .forEach((el) => (output += `${el[0]} ${el[1]}\n`));

console.log(output);

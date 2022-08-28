const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = Number(input.shift());
input = input.map((el) => el.split(" ").map(Number));

input.sort((a, b) => {
  if (a[1] === b[1]) {
    a[0] - b[0];
  } else {
    a[1] - b[1];
  }
});

let count = 0;
let endTime = 0;
input.forEach((time) => {
  if (time[0] >= endTime) {
    count++;
    endTime = time[1];
  }
});
console.log(count);

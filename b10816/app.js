const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = input.shift();
const numberCard = input.shift().trim().split(" ");
const M = input.shift();
const haveCard = input.shift().trim().split(" ");

// const output = [];

// for (let i = 0; i < M; i++) {
//   let count = 0;
//   for (let j = 0; j < N; j++) {
//     if (haveCard[i] === numberCard[j]) {
//       count++;
//     }
//   }
//   output.push(count);
// }

// console.log(output.join(" "));

const map = new Map();

for (number of numberCard) {
  if (map.has(number)) {
    map.set(number, map.get(number) + 1);
  } else {
    map.set(number, 1);
  }
}

const output = [];

for (number of haveCard) {
  if (map.has(number)) {
    output.push(map.get(number));
  } else {
    output.push(0);
  }
}

console.log(output.join(" "));

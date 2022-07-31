const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = input.shift();
const table = input.map((el) => el.split(" ").map((el) => +el));
const output = [];

for (let i = 0; i < N; i++) {
  let count = 1;
  for (let j = 0; j < N; j++) {
    if (i !== j) {
      if (table[i][0] < table[j][0] && table[i][1] < table[j][1]) {
        count++;
      }
    }
  }
  output.push(count);
}
console.log(output.join(" "));

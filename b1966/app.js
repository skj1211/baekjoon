const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = input.shift();
input = input.map((item) => item.split(" ").map(Number));

for (let i = 0; i < input.length; i += 2) {
  const priorities = input[i + 1];
  let num = input[i][1];
  let count = 0;

  while (true) {
    const max = Math.max(...priorities);
    if (max === priorities[0]) {
      count++;
      priorities.shift();
      if (num === 0) {
        break;
      }
    } else {
      priorities.push(priorities.shift());
    }

    if (num === 0) {
      num = priorities.length - 1;
    } else {
      num--;
    }
  }
  console.log(count);
}

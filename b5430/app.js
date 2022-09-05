const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const T = Number(input.shift());
input = input.map((el) => el.trim());

let output = "";

for (let i = 0; i < T; i++) {
  const cases = input.splice(0, 3);
  let isReverse = false;
  cases[2] = cases[2].slice(1, -1).split(",");

  let flag = true;
  for (const el of cases[0]) {
    if (el === "R") {
      isReverse = !isReverse;
    } else if (el === "D") {
      if (cases[1] === "0") {
        output += "error\n";
        flag = !flag;
        break;
      }
      if (cases[2].length === 0) {
        output += "error\n";
        flag = !flag;
        break;
      }
      if (isReverse) {
        cases[2].pop();
      } else {
        cases[2].shift();
      }
    }
  }

  if (isReverse) {
    cases[2].reverse();
  }
  if (flag) {
    output += "[" + cases[2].join(",") + "]\n";
  }
}

console.log(output);

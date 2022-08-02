const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
input = input.map((el) => el.trim());
const N = input.length;

for (let i = 0; i < N - 1; i++) {
  const str = input[i];
  const stack = [];
  let output = "yes";
  for (let j = 0; j < str.length; j++) {
    if (str[j] === "(") {
      stack.push(1);
    } else if (str[j] === "[") {
      stack.push(2);
    } else if (str[j] === ")") {
      if (stack[stack.length - 1] !== 1) {
        output = "no";
        break;
      }
      stack.pop();
    } else if (str[j] === "]") {
      if (stack[stack.length - 1] !== 2) {
        output = "no";
        break;
      }
      stack.pop();
    }
  }
  if (stack.length !== 0) {
    output = "no";
  }
  console.log(output);
}

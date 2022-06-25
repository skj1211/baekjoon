const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
const N = input.shift();
input = input.map((el) => el.replace(/\r/g, ""));

for (i = 0; i < N; i++) {
  const cases = input[i];
  const stack = [];
  let output = "YES";
  for (j = 0; j < cases.length; j++) {
    if (cases[j] === "(") {
      stack.push(1);
    } else {
      if (!stack.pop()) {
        output = "NO";
        break;
      }
    }
  }
  if (stack.length > 0) {
    output = "NO";
  }
  console.log(output);
}

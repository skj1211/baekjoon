const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
let output = "";
const N = input.shift();
const stack = [];

for (i = 0; i < N; i++) {
  let command = input[i].split(" ")[0].replace(/\r/g, "");
  let value = input[i].split(" ")[1];
  switch (command) {
    case "push":
      stack.push(value);
      break;

    case "pop":
      if (stack.length === 0) {
        output += "-1\n";
        break;
      }
      output += stack.pop() + "\n";
      break;

    case "size":
      output += stack.length + "\n";
      break;

    case "empty":
      if (stack.length === 0) {
        output += "1\n";
        break;
      }
      output += "0\n";
      break;

    case "top":
      if (stack.length === 0) {
        output += "-1\n";
        break;
      }
      output += stack[stack.length - 1] + "\n";
      break;
  }
}
console.log(output);

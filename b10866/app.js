const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
const output = [];
const N = input.shift();
const deque = [];

for (i = 0; i < N; i++) {
  const command = input[i].split(" ")[0].replace(/\r/g, "");
  const value = input[i].split(" ")[1];
  switch (command) {
    case "push_front":
      deque.splice(0, 0, value);
      break;
    case "push_back":
      deque.push(value);
      break;
    case "pop_front":
      if (deque.length === 0) {
        output.push(-1);
        break;
      }
      output.push(deque.shift());
      break;
    case "pop_back":
      if (deque.length === 0) {
        output.push(-1);
        break;
      }
      output.push(deque.pop());
      break;
    case "size":
      output.push(deque.length);
      break;
    case "empty":
      if (deque.length === 0) {
        output.push(1);
        break;
      }
      output.push(0);
      break;
    case "front":
      if (deque.length === 0) {
        output.push(-1);
        break;
      }
      output.push(deque[0]);
      break;
    case "back":
      if (deque.length === 0) {
        output.push(-1);
        break;
      }
      output.push(deque[deque.length - 1]);
      break;
  }
}
console.log(output.join("\n"));

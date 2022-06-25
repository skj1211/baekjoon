const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
const output = [];
const N = input.shift();
const queue = [];
for (i = 0; i < N; i++) {
  const command = input[i].split(" ")[0].replace(/\r/g, "");
  const value = input[i].split(" ")[1];
  switch (command) {
    case "push":
      queue.push(value);
      break;
    case "pop":
      if (queue.length === 0) {
        output.push(-1);
        break;
      }
      output.push(queue.shift());
      break;
    case "size":
      output.push(queue.length);
      break;
    case "empty":
      if (queue.length === 0) {
        output.push(1);
        break;
      }
      output.push(0);
      break;
    case "front":
      if (queue.length === 0) {
        output.push(-1);
        break;
      }
      output.push(queue[0]);
      break;
    case "back":
      if (queue.length === 0) {
        output.push(-1);
        break;
      }
      output.push(queue[queue.length - 1]);
      break;
  }
}
console.log(output.join("\n"));

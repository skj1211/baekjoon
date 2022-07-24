const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

for (let i = 0; i < input.length - 1; i++) {
  const [a, b, c] = input[i].split(" ").sort((a, b) => a - b);

  if (c ** 2 === a ** 2 + b ** 2) {
    console.log("right");
  } else {
    console.log("wrong");
  }
}

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
input = input.map((el) => el.trim());

for (let i = 0; i < input.length - 1; i++) {
  const revers = input[i].split("").reverse().join("");
  if (input[i] === revers) {
    console.log("yes");
  } else {
    console.log("no");
  }
}

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
const N = Number(input.shift());
let output = "";
let strReverse = "";

for (i = 0; i < N; i++) {
  let str = input[i].split(" ");
  strReverse = "";

  for (j = 0; j < str.length; j++) {
    strReverse += str[j].split("").reverse().join("").trim() + " ";
  }
  //   console.log(strReverse);
  output += strReverse + "\n";
}
console.log(output);

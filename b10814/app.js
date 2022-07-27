const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
input = input.map((el) => el.trim());
const N = input.shift();
const output = [];

const sortAge = [];

for (let i = 0; i < N; i++) {
  const number = { age: input[i].split(" ")[0], name: input[i].split(" ")[1] };
  sortAge.push(number);
}
sortAge.sort((a, b) => a.age - b.age);

for (let i = 0; i < N; i++) {
  const newData = `${sortAge[i].age} ${sortAge[i].name}`;
  output.push(newData);
}
console.log(output.join("\n"));

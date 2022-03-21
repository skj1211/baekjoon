const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
for(i = 1; i <= input[0]; i++) {
  let number = input[i].split(' ').map((el) => +el);
  console.log(number[0]+number[1]);
}
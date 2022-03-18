const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
input = input[0].split(' ').map((el) => parseInt(el));
solution(input[0], input[1], input[2]);
function solution(a, b, c) {
  let total = 0;
  let max = Math.max(a,b,c);
  if(a == b && b == c && a == c) {
    total = 10000 + max * 1000;
  } else if (a == b || a == c) {
    total = 1000 + a * 100;
  } else if (b == c) {
    total = 1000 + b * 100;
  } else {
    total = max * 100;
  }
  console.log(total);
}
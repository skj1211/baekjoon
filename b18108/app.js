const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
input = parseInt(input);
solution(input);
function solution(input) {
  console.log(input-543);
}

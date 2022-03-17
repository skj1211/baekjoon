const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
input = input[0];
solution(input);
function solution(score) {
  if(score>=90){
    console.log('A');
  } else if (score>=80) {
    console.log('B');
  } else if (score>=70) {
    console.log('C');
  } else if (score>=60) {
    console.log('D');
  } else {
    console.log('F');
  }
}

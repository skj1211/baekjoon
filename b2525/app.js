const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
let Time = input[0].split(' ').map((el)=>+el);

solution(Time[0], Time[1], parseInt(input[1]));
function solution(H, M, T) {
  let total = H * 60 + M + T;
  let hour = Math.floor(total/60);
  if(hour >= 24){
    hour -= 24;
  }
  console.log(hour, total%60);
}

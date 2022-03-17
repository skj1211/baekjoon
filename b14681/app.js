//백준에서 fs모듈 런타임 에러가 생기기 때문에 readline모듈을 써서 풀어야함
//종종 이런일이 있으므로 맞게 풀었는데 시간 버리는 일 없도록 주의
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// let input = fs.readFileSync(filePath).toString().split('\n');
// input = input.map((el)=>parseInt(el));
// solution(input[0], input[1]);
// function solution(A, B) {
//   if (A > 0 && B > 0){
//     console.log(1);
//   } else if (A < 0 && B > 0){
//     console.log(2);
//   } else if (A < 0 && B < 0){
//     console.log(3);
//   } else if (A > 0 && B < 0){
//     console.log(4);
//   }
// }

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", (line) => { 
  input.push(line);
  console.log(input)
  rl.close();
});
rl.on('close', () => {

})

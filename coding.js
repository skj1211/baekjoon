//백준에서 fs모듈 런타임 에러가 생기기 때문에 readline모듈을 써서 풀어야함
//종종 이런일이 있으므로 맞게 풀었는데 시간 버리는 일 없도록 주의


const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(input[0], input[1]);
function solution(A, B) {

}

// readline ///////////////////////////////////////////
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => { 
  rl.close();
});
rl.on('close', () => {
})


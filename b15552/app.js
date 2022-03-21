// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// let input = fs.readFileSync(filePath).toString().split('\n');
// for(i = 1; i <= input[0]; i++) {
//   let number = input[i].split(' ').map((el) => +el);
//   console.log(number[0]+number[1]);
// }

////위의 방법으로 하면 10950처럼 답은 나오지만 시간 초과로 불합격이다
////여러줄로 여러번 출력하기 때문인듯 함

////아래는 출력 값들은 하나의 문자열로 만들어 출력을 한번만 하기 때문에 시간 단축이 된다.

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
let str = '';
for(i = 1; i <= input[0]; i++) {
  let number = input[i].split(' ').map((el) => +el);
  str += number[0]+number[1] + '\n';
}
console.log(str);
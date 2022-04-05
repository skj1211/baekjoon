const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
let resultArr = [];
let result = '';

for (let i = 97; i <= 122; i++) {
  let alphabet = String.fromCharCode(i);        //아스키코드를 이용해 a~z를 구한다.
  resultArr.push(input[0].indexOf(alphabet));   //.indexOf() 호출한 객체에서 주어진 값과 일치하는 인덱스를 반환, 일치하는 값이 없으면 -1을 반환
}
result = resultArr.join(' ');
console.log(result);
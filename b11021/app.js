const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
let answer = '';
for(i = 1; i <= input[0]; i++) {
    let num = input[i].split(' ').map((el) => +el);
    answer += `Case #${i}: ${num[0]+num[1]}\n`;
}
console.log(answer);

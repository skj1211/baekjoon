const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
let count = input[0].split(' ').map((el) => +el);
let num = input[1].split(' ').map((el) => +el);
let answer = '';
 for(i = 0; i < count[0]; i++) {
    if(count[1] > num[i]) {
        answer += num[i] + ' ';
    }
 }
console.log(answer);
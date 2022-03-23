const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
let score = input[1].split(' ').map((el) => +el);
let maxScore = Math.max(...score);
let total = 0;
for(i = 0; i < score.length; i++) {
    total += score[i]/maxScore*100;
}
console.log(total/input[0]);
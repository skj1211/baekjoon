const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
let score = 0;
let total = 0;
for(i = 1; i <= input[0]; i++) {
    let num = input[i].split(' ').map((el) => +el);
    score = 0;
    console.log(num);
    for(j = 1; j < num[0]; j++) {
        score += num[j];
    }
}
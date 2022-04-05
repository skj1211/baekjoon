const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
let num = input[0];
let str = input[1].split('').map((el) => +el);
let total = 0;
for(i = 0; i < num; i++) {
    total += str[i];
}
console.log(total);
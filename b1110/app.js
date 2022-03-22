const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
let targetNumber = Number(input[0]);   
let num = Number(input[0]);
let sum = 0;
let count = 0;
while(true) {
    sum = num%10 + Math.floor(num/10);
    if(sum>9) {
        sum = sum%10;
    }
    num = ((num%10)*10) + sum;
    count++;
    if(num==targetNumber) {
        break;
    }
}
console.log(count);
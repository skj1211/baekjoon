const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
let num = input[1].split(' ').map((el) => +el);
let max = num[0];
let min = num[0];
for(i=0; i<input[0]; i++) {
    if(max<num[i]){
        max = num[i];
    }
    if(min>num[i]){
        min = num[i];
    }
}
console.log(`${min} ${max}`);

// console.log(`${Math.min(...num)} ${Math.max(...num)}`);
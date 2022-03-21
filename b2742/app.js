const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
let str = '';
for(i = input[0]; i >= 1; i--) {
    str += i +'\n';
}
console.log(str);
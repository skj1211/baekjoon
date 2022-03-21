const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
input = Number(input[0].split(' '));
solution(input);
function solution(x) {
    let number = 0;
    for(i = 1; i<=x; i++){
        number += i;
    }
    console.log(number);
}

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input[0] = parseInt(input[0]);
solution(input[0], input[1]);
function solution(A, B) {
    for(i = input[1].length - 1; i >= 0; i--){
        console.log(A*B.charAt(i));
    }
    console.log(A*B);
}


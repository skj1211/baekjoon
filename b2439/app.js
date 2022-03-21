const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
let answer = '';
let space = '';
for(i = 1; i<=input[0]; i++) {
    space ='';
    for(j = input[0]; j>i; j--) {
        console.log(j);
        space +=' ';
    }
    answer += '*';
    console.log(`${space}${answer}`);
}


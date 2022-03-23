const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
for(i = 1; i <= input[0]; i++) {
    let str = '';
    let score = 0;
    let total = 0;
    str = input[i];
    for(j = 0; j < str.length; j++) {
        if(str.charAt(j) == 'O'){
            score++;
        }
        if(str.charAt(j) != 'O'){
            score = 0;
        }
        total += score;
    }
    console.log(total);
}
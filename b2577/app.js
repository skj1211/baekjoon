const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
let number = String(input[0]*input[1]*input[2]);
for(i = 0; i<10; i++){
    let count = 0;
    for(j = 0; j<number.length; j++){
        if(i == number.charAt(j)) {
            count++;
        }
    }
    console.log(count);
}
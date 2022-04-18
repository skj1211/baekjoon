const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
input = input[0].split(' ');
if(reverse(input[0]) > reverse(input[1])) {
    console.log(reverse(input[0]));
} else {
    console.log(reverse(input[1]));
}
function reverse(str) {
    let num = '';
    for(i = str.length - 1; i >= 0; i--) {
        num += str.charAt(i);
    }
    return num;
}

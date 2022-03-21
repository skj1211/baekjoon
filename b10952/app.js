const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
// let number = input
// let i = 0;
// while(i) {

// }


console.log(input);

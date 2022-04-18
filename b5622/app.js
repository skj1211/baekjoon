const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
input = input[0].split('');
let result = 0;
for (let i = 0; i < input.length; i++) {
    if (input[i] === 'A' || input[i] === 'B' || input[i] === 'C') {
      result = result + 3;
    } else if (input[i] === 'D' || input[i] === 'E' || input[i] === 'F') {
      result = result + 4;
    } else if (input[i] === 'G' || input[i] === 'H' || input[i] === 'I') {
      result = result + 5;
    } else if (input[i] === 'J' || input[i] === 'K' || input[i] === 'L') {
      result = result + 6;
    } else if (input[i] === 'M' || input[i] === 'N' || input[i] === 'O') {
      result = result + 7;
    } else if (input[i] === 'P' || input[i] === 'Q' || input[i] === 'R' || input[i] === 'S') {
      result = result + 8;
    } else if (input[i] === 'T' || input[i] === 'U' || input[i] === 'V') {
      result = result + 9;
    } else if (input[i] === 'W' || input[i] === 'X' || input[i] === 'Y' || input[i] === 'Z') {
      result = result + 10;
    }
  }
  console.log(result);
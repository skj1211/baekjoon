const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
input = input.map((el) => +el);

let max = input[0];
let maxId = 0;
for(i = 1; i<10; i++) {
    if(max < input[i]) {
        max = input[i];
        maxId = i;
    }
}
console.log(max);
console.log(maxId+1);

//다른 방법
// let max = Math.max(...input);
// let count = 0;
// for(i = 0; i<input.length; i++) {
//     count++;
//     if(max == input[i]) {
//         break;
//     }
// }
// console.log(`${max} ${count}`);

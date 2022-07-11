const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
const number = input[0].trim().split(" ");

const N = Number(number[0]);
const M = Number(number[1]);
const card = input[1].split(" ").map((el) => +el);
let output = 0;
let sum = 0;
for (i = 0; i < N - 2; i++) {
  for (j = i + 1; j < N - 1; j++) {
    for (k = i + 2; k < N; k++) {
      sum = card[i] + card[j] + card[k];
      if (sum > output && sum <= M) {
        output = sum;
      }
    }
  }
}
console.log(output);
///////////////////////////////////////////////////////////////
// let fs = require('fs');
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
// input[0] = input[0].split(" ");
// const cards = input[1].split(" ").map((element) => Number(element));
// const N = Number(input[0][0]);
// const M = Number(input[0][1]);
// let answer = 0;

// for(let i = 0; i < N; i++){
//    for(let j = i+1; j < N; j++){
//       for(let k = j+1; k < N; k++){
//          const sum = cards[i] + cards[j] + cards[k];
//          const gap = M - sum;
//          if(gap >= 0 && answer <= sum){
//             answer = sum;
//          }
//       }
//    }
// }
// console.log(answer);

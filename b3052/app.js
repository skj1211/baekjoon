const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n').map((el)=>+el);
let num = 42;
let remainder = [];
let count = 0;
// for(i = 0; i < 10; i++) {
//     remainder.push(input[i]%num); 
// }
// let asdf = 0;
// for(i = 0; i < 10; i++) {
//     asdf = 0;
//     for(j = 1; j < 10; j++) {
//         if(remainder[i] == remainder[j+i]) {
//             asdf++;
//         }
//     }
//     if(asdf == 0) {
//         count++;
//     }
// }
// console.log(count);

////위는 내가 푼 답
////indexOf()를 이용하면 간단해진다.
////모르면 맞아야지...
//indexOf()는 찾으려는 해당 배열에 일치하는 요소가 없으면 -1을 반환해준다

const userNum = [];
input.forEach(x => {    //forEach(x => 내용 ); forEach()는 함수의 내용을 배열 요소 각각에 실행한다.
    const num = x % 42;    
    
    if (userNum.indexOf(num) === -1) {  //배열에 num이 없으면 -1을 반환 즉 
        userNum.push(num);              //겹치는 인덱스가 없기 때문에 push해준다.
    }                                   //겹치면 push안해줌
});
console.log(userNum.length);    
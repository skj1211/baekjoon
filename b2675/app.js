const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
let caseNum = input[0];
let output = '';
for(i = 1; i <= caseNum; i++ ){
    let repeat = input[i].split(' ');
    output = '';
    for (j = 0; j < repeat[1].length; j++) {
        for (k = 0; k < repeat[0]; k++) {
            output += repeat[1].charAt(j);
        }
    }
    console.log(output);
}

//백준결과 통과는 되는데 for문 세번 중첩하고 복잡함.
//더 좋은 방법 있을 것 같아서 다른사람들 한거 봤더니
//나처럼 3번 중첩한 사람 많음


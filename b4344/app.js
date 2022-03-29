const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
let total = 0;      //점수 총합
let average = 0;    //점수 평균
let num = 0;        //평균을 넘는 사람 수
let percent = 0;    //평균 넘은 사람의 비율
let output = '';
for(i = 1; i <= input[0]; i++) {
    let score = input[i].split(' ').map((el) => +el);   //각 케이스 점수들
    total = 0;
    average = 0;
    num = 0;
    percent = 0;
    for(j = 1; j <= score[0]; j++) {
        total += score[j];
    }
    average = total/score[0];   //평균점수
    for(j = 1; j <= score[0]; j++){
        if(average < score[j]) {
            num += 1;
        }
    }
    percent = (num/score[0]*100).toFixed(3); //toFixed()원하는 소수점까지 반올림을해준다. 40일 경우 40.000으로 해줌
    output += `${percent}%\n`;
}
console.log(output);




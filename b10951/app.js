const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
let i = 0;
while(i<input.length - 1) { //input.length 에 -1을 안해야 정답인데 백준에 통과를 받으려면 -1을 해줘야한다.
    let asdf = input[i].split(' ').map((el) => +el);
    console.log(asdf[0]+asdf[1]);  
    i++;
}
//-1을 하면 마지막 입력값을 계산하지 않는데도 백준에서 통과됨
//-1을 지우면 틀렸다고 한다.
//-1을 해줘야하는 이유를 모르겠음
//다른 사람도 나와 같은 이유로 질문한 내용이 있음 (백준 검사가 잘못 된듯함)
//쉬운 문제인데 정답률이 35퍼임
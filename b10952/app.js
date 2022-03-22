const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
let i = 0;
while(true) {
    let asdf = input[i].split(' ').map((el) => +el);
    i++;
    if(asdf[0]+asdf[1] != 0){
        console.log(asdf[0]+asdf[1]);
    }
    if(asdf[0]+asdf[1] == 0) {
        break;
    }
}


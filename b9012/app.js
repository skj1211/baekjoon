const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
const N = input.shift();
input = input.map((el) => el.replace(/\r/g, ""));

////////내가 푼것////////////////////
for (let i = 0; i < N; i++) {
  let output = "YES";
  const cases = input[i];
  const stack = [];

  for (let j = 0; j < input[i].length; j++) {
    if (cases[j] === "(") {
      stack.push(1);
    } else {
      if (stack.length === 0) {
        output = "NO";
        break;
      }
      stack.pop();
    }
  }
  if (stack.length !== 0) {
    output = "NO";
  }
  console.log(output);
}

///////////////
for (i = 0; i < N; i++) {
  const cases = input[i];
  const stack = [];
  let output = "YES";
  for (j = 0; j < cases.length; j++) {
    if (cases[j] === "(") {
      stack.push(1);
    } else {
      if (!stack.pop()) {
        output = "NO";
        break;
      }
    }
  }
  if (stack.length > 0) {
    output = "NO";
  }
  console.log(output);
}

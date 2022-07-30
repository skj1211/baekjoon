const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = input.shift();

for (let i = 0; i < N; i++) {
  const H = input[i].trim().split(" ")[0];
  const N = input[i].trim().split(" ")[2];

  const floorNum = String(N % H) == 0 ? String(H) : String(N % H);
  const roomNum = String(Math.ceil(N / H));

  if (roomNum < 10) {
    console.log(floorNum + "0" + roomNum);
  } else {
    console.log(floorNum + roomNum);
  }
}

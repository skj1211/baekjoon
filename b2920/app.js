const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
input = input[0].split(" ").map((el) => +el);

if (input.join("") === "12345678") {
  console.log("ascending");
} else if (input.join("") === "87654321") {
  console.log("descending");
} else {
  console.log("mixed");
}

//다음부턴 난이도가 낮은 문제에서 코드 길이가 길어진다 싶으면 다른 방법 생각하기
///////////////////////////
// let check = false;
// let check2 = false;
// let number = 8;

// for (i = 0; i < 8; i++) {
//   if (input[0] === 1) {
//     if (input[i] !== i + 1) {
//       console.log("mixed");
//       check = false;
//       check2 = false;
//       break;
//     }
//     if (i === 7) {
//       check = true;
//       check2 = false;
//     }
//   } else if (input[0] === 8) {
//     if (input[i] !== number) {
//       console.log("mixed");
//       check = false;
//       check2 = false;
//       break;
//     }
//     if (i === 7) {
//       check = false;
//       check2 = true;
//     }
//   } else {
//     console.log("mixed");
//     break;
//   }
//   number--;
// }

// if (check) {
//   console.log("ascending");
// } else if (check2) {
//   console.log("descending");
// }

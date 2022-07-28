const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();
const N = Number(input);

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

// LinkedList 클래스 설정
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
    }

    this.tail = newNode;
    this.length++;

    return newNode;
  }

  getHead() {
    // 첫 노드(head) 가져오기
    return this.head.val;
  }

  removeHead() {
    // 첫 노드(head)를 연결리스트에서 지우기
    this.head = this.head.next;
    this.head.prev = null;
    this.length--;
  }

  getLength() {
    return this.length;
  }
}

const cards = new LinkedList();

for (let i = 1; i <= N; i++) {
  cards.push(i);
}

while (cards.getLength() !== 1) {
  cards.removeHead();
  cards.push(cards.getHead());
  cards.removeHead();
}
console.log(cards.getHead());

////////////////////////////////
//시간초과
// const card = [];
// for (let i = 1; i <= input; i++) {
//   card.push(i);
// }

// while (card.length > 1) {
//   card.shift();
//   const move = card.shift();
//   card.push(move);
// }
// console.log(card[0]);

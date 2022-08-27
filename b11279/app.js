const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = Number(input.shift());
input = input.map(Number);

class maxHeap {
  constructor() {
    this.nodes = [];
  }

  insert(data) {
    this.nodes.push(data);
    this.bubbleUp();
  }

  bubbleUp(index = this.nodes.length - 1) {
    if (index < 1) return;
    let currentNode = this.nodes[index];
    let parentIndex = Math.floor((index - 1) / 2);
    let parentNode = this.nodes[parentIndex];

    if (parentNode >= currentNode) return;

    this.nodes[parentIndex] = currentNode;
    this.nodes[index] = parentNode;
    index = parentIndex;
    this.bubbleUp(index);
  }

  extract() {
    const max = this.nodes[0];
    if (this.nodes.length === 1) {
      this.nodes.pop();
      return max;
    }
    this.nodes[0] = this.nodes.pop();
    this.trickleDown();
    return max;
  }

  trickleDown(index = 0) {
    let leftChildIndex = index * 2 + 1;
    let rightChildIndex = index * 2 + 2;
    let length = this.nodes.length;
    let maximum = index;

    if (!this.nodes[leftChildIndex] && !this.nodes[rightChildIndex]) return;

    if (!this.nodes[rightChildIndex]) {
      if (this.nodes[leftChildIndex] > this.nodes[maximum]) {
        maximum = leftChildIndex;
      }
    }

    if (this.nodes[leftChildIndex] < this.nodes[rightChildIndex]) {
      if (rightChildIndex <= length && this.nodes[rightChildIndex] > this.nodes[maximum]) {
        maximum = rightChildIndex;
      }
    } else {
      if (leftChildIndex <= length && this.nodes[leftChildIndex] > this.nodes[maximum]) {
        maximum = leftChildIndex;
      }
    }

    if (maximum !== index) {
      let t = this.nodes[maximum];
      this.nodes[maximum] = this.nodes[index];
      this.nodes[index] = t;
      this.trickleDown(maximum);
    }
  }
}

const heap = new maxHeap();
let extracts = "";
input.forEach((el, index) => {
  if (el !== 0) {
    heap.insert(el);
  } else {
    if (heap.nodes.length === 0) {
      extracts += "0" + "\n";
    } else {
      let t = heap.extract();
      extracts += t + "\n";
    }
  }
});

console.log(extracts.trim());

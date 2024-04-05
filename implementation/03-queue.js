const { SinglyLinkedNode } = require("./01-singly-linked-list");

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  enqueue(val) {
    const newNode = new SinglyLinkedNode(val);
    this.length++;
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return this.length
    }
    this.tail.next = newNode
    this.tail = newNode
    return  this.length
  }

  dequeue() {
    if(!this.head) return  null
    let storeNode = this.head
    this.head = storeNode.next
    if(!this.head) this.tail = null
    this.length--
    return storeNode.value
  }
}

module.exports = {
  Queue,
  SinglyLinkedNode,
};

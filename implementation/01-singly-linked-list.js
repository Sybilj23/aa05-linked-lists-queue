// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  addToHead(val) {
    const newNode = new SinglyLinkedNode(val);
    newNode.next = this.head;
    this.length++;
    this.head = newNode;
    return this;
  }

  addToTail(val) {
    let newNode = new SinglyLinkedNode(val);
    this.length++;
    if (!this.head) {
      this.head = newNode;
      return this;
    }

    let curr = this.head;
    while (curr.next) {
      curr = curr.next;
    }
    curr.next = newNode;

    return this;
  }

  removeFromHead() {

    if (!this.head) {
      return undefined;
    } else {
      let removedHead = this.head;
      if (this.head) this.head = this.head.next;
      return removedHead;

    }
    this.length--
  }

  removeFromTail() {
    if (!this.head) {
        return undefined;
      } else {
        let removedHead = this.tail;
        if (this.head) this.head = this.head.next;
        return removedHead;

      }

  }

  peekAtHead() {
    // Return the value of head node
    // Your code here
    // Write your hypothesis on the time complexity of this method here
  }

  print() {
    // Print out the linked list
    // Your code here
    // Write your hypothesis on the time complexity of this method here
  }
}

module.exports = {
  SinglyLinkedList,
  SinglyLinkedNode,
};

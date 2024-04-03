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
      this.length--
      return removedHead;

    }

  }

  removeFromTail() {
    if (!this.head) {
      return undefined;
    } else if (this.length === 1){
      let removedTail = this.head;
      this.head = null
      this.length = 0;
      return removedTail;


    }else {
      let removedTail;
      let curr = this.head;
      while (curr.next.next) {
        curr = curr.next;
      }
      removedTail = curr.next;
      curr.next = null;
      this.length--;
      return removedTail;
    }
  }


  peekAtHead() {
    if (!this.head) {
      return undefined;
    } else {
      return this.head.value;
    }
    // Return the value of head node
    // Your code here
    // Write your hypothesis on the time complexity of this method here
  }

  print() {
    let curr = this.head;

    while (curr) {
      console.log(`${curr.value}`);
      curr = curr.next;
    }


  }
}
module.exports = {
  SinglyLinkedList,
  SinglyLinkedNode,
};

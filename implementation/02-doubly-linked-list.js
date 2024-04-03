// Node class is implemented for you, no need to look for bugs here!
class DoublyLinkedNode {
  constructor(val) {
    this.value = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addToHead(val) {
    const newNode = new DoublyLinkedNode(val);
    if(this.length >=1){
    this.head.prev = newNode
    newNode.next = this.head
    this.head = newNode
    } else{
        this.head = newNode
        this.tail = newNode
    }
    this.length++
  }

  addToTail(val) {
    const newNode = new DoublyLinkedNode(val)
    if(this.length >= 1){
       this.tail.next = newNode
       newNode.prev = this.tail
       this.tail = newNode
    }else{
        this.head = newNode
        this.tail = newNode
    }
    this.length++
  }

  removeFromHead() {
   if(!this.head){
    return undefined
   }else{
    let removedHead = this.head
    if(this.head.next){
    this.head.next.prev =  null
    this.head = this.head.next
    }else{
        this.head = null
    }
    this.length--
    return removedHead.value
   }
  }

  removeFromTail() {
   if(!this.head){
    return undefined
   }else if(this.length === 1){
    let removedTail = this.head
    this.head = null
    this.length = 0
    return removedTail.value

   }else{
    let removedTail
    let curr =  this.head
    while(curr.next.next){
        curr = curr.next
    }
    removedTail = curr.next
    curr.next = null
    this.length--
    return removedTail.value
   }

  }

  peekAtHead() {
   if(!this.head){
    return undefined
   }else{
    return this.head.value
   }
  }

  peekAtTail() {
  if(!this.head){
    return undefined
  }else{
    return this.tail.value
  }
  }
}

module.exports = {
  DoublyLinkedList,
  DoublyLinkedNode,
};

const Node = require('./Node');

class LinkedList{
  
  constructor(){
    this.head = null;
  }

  addToHead(node){
    // add new new to var
    let newHead = new Node(node);
    // save current head
    let currentHead = this.head;
    // assign head to newhead
    this.head = newHead;
    // if there is a head set the next one 
    if (currentHead){
      this.head.setNextNode(currentHead);
    }
  }

  addToTail(node){
    let newTail = new Node(node);
    let currentNode = this.head;
    // set tail as head if there is no head
    if (!this.head){
      this.head = newTail;
    } else {
      // find last node and set the next node as the new tail
      while (currentNode.getNextNode() != null){
        currentNode = currentNode.getNextNode();
      }
      currentNode.setNextNode(newTail);
    }
  }

  findNodeIteratively(node){
    
    let nodeToFind = node;
    let startingNode = this.head;

    if (!startingNode){
      console.log('Nothing to find');
      return;
    }

    while (startingNode){
      if (startingNode.data === nodeToFind){
        console.log('found the node!', nodeToFind);
        return startingNode.data;
      }
      startingNode = startingNode.getNextNode();
    }

    return null;

  }

  print(){
    // print out the linked list 
    let output = '';
    let current = this.head;

    if (!current){
      console.log('nothing to print');
      return;
    }

    output += '<head>';
    
    while (current){
      output += `${current.data}, `;
      current = current.getNextNode();
    }

    output += `<tail>`;
    console.log(output);
  }

  removeHead(){
    const removedHead = this.head;
    if (!removedHead){
      return;
    }
    this.head = this.head.getNextNode();
    return removedHead.data;
  }

}

// const list = new LinkedList();

// list.addToHead(2);
// list.addToHead(15);
// list.addToHead(16);
// list.addToTail(4);

// console.log(list);

// list.findNodeIteratively(4);

// list.print();

module.exports = LinkedList;
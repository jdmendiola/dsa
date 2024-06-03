class Node {
  constructor(data){
    this.data = data;
    this.next = null;
  }

  setNextNode(node){
    if (!(node instanceof Node)){
      throw new Error ('This is not a node instance');
    }

    this.next = node;
  }

  setNext(data){
    this.next.data = data;
  }

  getNextNode(){
    return this.next;
  }

}

// let firstNode = new Node(2);
// let secondNode = new Node(3);


// console.log(firstNode);

// firstNode.setNextNode(secondNode);

// console.log(firstNode);
// console.log(secondNode);

module.exports = Node;
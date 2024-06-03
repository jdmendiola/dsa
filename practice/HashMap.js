const LinkedList = require('./LinkedList');
const Node = require('./Node');

class HashMap {
  constructor(size = 0) {
    this.hashmap = new Array(size)
      .fill(null) //fill it with nulls first
      .map(() => new LinkedList()); // then linked lists
  }

  hash(key){
    let hash = 0;
    let length = key.length;
    for (let i = 0; i < key.length; i++){
      hash += hash + key.charCodeAt(i);
    }
    return hash % length;
  }

  assign(key, value){

    let arrayIndex = this.hash(key);
    let linkNode = this.hashmap[arrayIndex];

    // this case is if the linked list is empty at the index
    if (linkNode.head === null){
      linkNode.addToHead({key, value});
      console.log(linkNode);
      return;
    }

    // case for when linked list is not empty
    let current = linkNode.head;

    while (current){

      // CONCEPT if key is found in linked list replace with the new data 
      if (current.data.key === key){
        current.data = {key, value};
      }

      // CONCEPT: if can't find a matching key then find the tail and add to it. Leave loop
      if (current.getNextNode() === null){
        current.setNextNode(new Node({key, value}));
        return;
      }

      current = current.getNextNode();
    }

  }

  retrieve(key){
    // return data based on key
    let arrayIndex = this.hash(key);
    let linkNode = this.hashmap[arrayIndex];
    let current = linkNode.head;

    while (current){
      if (current.data.key === key){
        return current.data.value;
      }
      current = current.getNextNode();
    }

    return null;
  }
}

let contacts = new HashMap(5);

// assign test
contacts.assign('332', 'david');
console.log(contacts);
// same key replace test
contacts.assign('332', 'shawn');
//console.log(contacts.hashmap[2]);

// retrieve test
console.log(contacts.retrieve('332'));


module.exports = HashMap;
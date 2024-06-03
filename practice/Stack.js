const LinkedList = require('./LinkedList');


class Stack {
  constructor(maxSize = Infinity){
    this.size = 0;
    this.maxSize = maxSize;
    this.stack = new LinkedList();
  }

  hasRoom(){
    return this.size < this.maxSize;
  }

  isEmpty(){
    return this.size === 0;
  }

  push(data){

    if (this.hasRoom()){
      this.stack.addToHead(data);
      this.size++;
    } else {
      console.log('Stack overflow');
    }
    
  }

  pop(){
    if (!this.isEmpty()){
      let popped = this.stack.removeHead();
      this.size--;
      console.log(`removed ${popped}`);
      return popped;
    } else {
      console.log('Stack underflow');
    }
    
  }

  peek(){
    return this.stack.head.data;
  }

}

let stickies = new Stack(4);

stickies.push(4);
stickies.push(85);
stickies.push(8);
stickies.push(9);
stickies.push(97);

stickies.pop();
stickies.pop();
stickies.pop();
stickies.pop();
stickies.pop();

console.log(stickies.size);

module.exports = Stack;
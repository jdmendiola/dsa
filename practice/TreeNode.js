class TreeNode {
  constructor(data){
    this.children = [];
    this.data = data;
  }

  addChild(child){
    // check if the added child is already a tree
    if (child instanceof TreeNode){
      this.children.push(child);
    } else {
      this.children.push(new TreeNode(child));
    }
  }

  removeChild(childToRemove){
    // tree.removeChild('blue')
    // tree.removeChild(green)
    let length = this.children.length;
    this.children = this.children.filter(value => {

      //  filter out via node input 
      if (childToRemove instanceof TreeNode){
        // fill array with everything but the child to remove
        if (childToRemove !== value){
          return true;
        } else {
          return false;
        }
      } else {
        // filter out via data since it is not a node
        // fill array with everything but the child to remove
        if (childToRemove.data !== value){
          return true;
        } else {
          return false;
        }
      }
    });

    // iterate through children if not found in this level
    if (length === this.children.length){
      this.children.forEach(child => {
        child.removeChild(childToRemove)
      })
    }   
  }

  breadthFirstTraversal(){
    // has a queue
    let queue = [this];
    console.log(queue);
    while (queue.length > 0){
      let current = queue.shift();
      console.log(current.data);
      queue = queue.concat(current.children);
    }
  }

  depthFirstTraversal(){
    console.log(this.data);
    this.children.forEach(child => {
      child.depthFirstTraversal();
    })
  }


}

let branch = new TreeNode(50);
let branchNode = new TreeNode(40);

branchNode.addChild(99);

branch.addChild(2);
branch.addChild(23);
branch.addChild(branchNode);
branch.addChild(22);
branch.addChild(28);


//console.log(branch);

//console.log(branch.children);

branch.breadthFirstTraversal();

console.log('------------');

branch.depthFirstTraversal();



module.exports = TreeNode;
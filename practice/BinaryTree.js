class BinaryTree {
  constructor(data, depth = 1){
    this.left = null;
    this.right = null;
    this.data = data;
    this.depth = depth;
  }

  insert(value){
    // check if left or side 
    // check if there is a left or right
    // insert new tree 
    if (value < this.data){
      if (!this.left){
        this.left = new BinaryTree(value, this.depth + 1);
      } else {
        // this will call the function again since it didn't find an empty left
        this.left.insert(value);
      }
    } else {
      if (!this.right){
        this.right = new BinaryTree(value, this.depth + 1);
      } else {
        // this will call the function again since it didn't find an empty right
        this.right.insert(value);
      }
    }
  }

  getNodeByValue(value){
    if (this.data === value){
      return this;
    } else if (this.left && value < this.value){
      return this.left.getNodeByValue(value);
    } else if (this.right){
      return this.right.getNodeByValue(value);
    } else {
      return null;
    }
  }

  depthFirstTraversal(result = []){
    if (this.left){
      this.left.depthFirstTraversal();
    }
    console.log(`traversing nodes ${this.data} and depth ${this.depth}`);
    if (this.right){
      this.right.depthFirstTraversal();
    }
  }


}

let tree = new BinaryTree(20);

tree.insert(30);
tree.insert(18);
tree.insert(55);

console.log(tree);

console.log(tree.getNodeByValue(55));

console.log(tree.depthFirstTraversal());

module.exports = BinaryTree;
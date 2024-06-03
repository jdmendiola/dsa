class BinaryTree {
  constructor(value, depth = 1) {
    this.value = value;
    this.depth = depth;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (!this.left) {
        this.left = new BinaryTree(value, this.depth + 1);
      } else {
        this.left.insert(value);
      }
    } else {
      if (!this.right) {
        this.right = new BinaryTree(value, this.depth + 1);
      } else {
        this.right.insert(value);
      }
    }
  }

  getNodeByValue(value) {
    if (this.value === value) {
      return this;
    } else if (this.left && value < this.value) {
      return this.left.getNodeByValue(value);
    } else if (this.right) {
      return this.right.getNodeByValue(value);
    } else {
      return null;
    }
  }

  depthFirstTraversal() {
    if (this.left) {
      this.left.depthFirstTraversal();
    }

    console.log(this.value, this.depth);

    if (this.right) {
      this.right.depthFirstTraversal();
    }
  }

  findMin() {
    let current = this;
    while (current.left) {
      current = current.left;
    }
    return current;
  }

  remove(value) {
    if (value < this.value) {
      if (this.left) {
        this.left = this.left.remove(value);
      }
    } else if (value > this.value) {
      if (this.right) {
        this.right = this.right.remove(value);
      }
    } else {
      // Node to be removed found
      if (!this.left && !this.right) {
        return null; // No children
      } else if (!this.left) {
        return this.right; // One child (right)
      } else if (!this.right) {
        return this.left; // One child (left)
      } else {
        // Two children
        let minRight = this.right.findMin();
        this.value = minRight.value;
        this.right = this.right.remove(minRight.value);
      }
    }
    return this;
  }
}

module.exports = BinaryTree;
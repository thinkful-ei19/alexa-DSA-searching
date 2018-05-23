'use strict';

class BinarySearchTree {
  constructor(key=null, value=null, parent=null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }

  insert(key, value) {
    //if the tree is empty then this key being inserted is the root node of the tree
    if (this.key == null) {
      this.key = key;
      this.value = value;
    }

    //If the tree already exist, then start at the root, 
    //and compare it to the key you want to insert
    // If the new key is less than the node's key 
    //then the new node needs to live in the left-hand branch.
    else if (key < this.key) {
      //if the existing node does not have any left child, 
      //meaning that if the `left` pointer is empty 
      //then we can just instantiate and insert the new node 
      //as the left child of that node, passing `this` as the parent.  
      if (this.left == null) {
        this.left = new BinarySearchTree(key, value, this);
      }
      //if the node has an existing left child, 
      //then we recursively call the `insert` method 
      //so the node is added further down the tree.
      else {
        this.left.insert(key, value);
      }
    }
    //Similarly, if the new key is greater than the node's key 
    //then you do the same thing, but on the right-hand side.
    else {
      if (this.right == null) {
        this.right = new BinarySearchTree(key, value, this);
      }
      else {
        this.right.insert(key, value);
      }
    }
  }

  find(key) {
    //if the item is found at the root then return that value
    if (this.key == key) {
      return this.value;
    }
    //if the item you are looking for is less than the root 
    //then follow the left child
    //if there is an existing left child, 
    //then recursively check its left and/or right child
    //until you find the item.
    else if (key < this.key && this.left) {
      return this.left.find(key);
    }
    //if the item you are looking for is greater than the root 
    //then follow the right child
    //if there is an existing right child, 
    //then recursively check its left and/or right child
    //until you find the item.
    else if (key > this.key && this.right) {
      return this.right.find(key);
    }
    //You have search the treen and the item is not in the tree
    else {
      throw new Error('Key Error');
    }
  }

  _replaceWith(node) {
    if (this.parent) {
      if (this == this.parent.left) {
        this.parent.left = node;
      }
      else if (this == this.parent.right) {
        this.parent.right = node;
      }

      if (node) {
        node.parent = this.parent;
      }
    }
    else {
      if (node) {
        this.key = node.key;
        this.value = node.value;
        this.left = node.left;
        this.right = node.right;
      }
      else {
        this.key = null;
        this.value = null;
        this.left = null;
        this.right = null;
      }
    }
  }

  _findMin() {
    if (!this.left) {
      return this;
    }
    return this.left._findMin();
  }

  remove(key) {
    if (this.key == key) {
      if (this.left && this.right) {
        const successor = this.right._findMin();
        this.key = successor.key;
        this.value = successor.value;
        successor.remove(successor.key);
      }
      //If the node only has a left child, 
      //then you replace the node with its left child.  
      else if (this.left) {
        this._replaceWith(this.left);
      }
      //And similarly if the node only has a right child 
      //then you replace it with its right child.
      else if (this.right) {
        this._replaceWith(this.right);
      }
      //If the node has no children then
      //simply remove it and any references to it 
      //by calling "this._replaceWith(null)".
      else {
        this._replaceWith(null);
      }
    }
    else if (key < this.key && this.left) {
      this.left.remove(key);
    }
    else if (key > this.key && this.right) {
      this.right.remove(key);
    }
    else {
      throw new Error('Key Error');
    }
  }

  // **only difference is where its being pushed
//////////// DFS: Pre-Order ////////////
// process node
// recursively step left
// recursively step right

  dfsPreOrder(arr = []) {
    arr.push(this.key);
  
    if (this.left) {
        this.left.dfsPreOrder(arr);
    }
    if (this.right) {
        this.right.dfsPreOrder(arr);
    }
    return arr;
  }

  //////////// DFS: In-Order ////////////
  // recursively step left
  // process node
  // recursively step right

  dfsInOrder(arr = []) {
    if (this.left) {
        this.left.dfsInOrder(arr);
    }
    arr.push(this.key);
    if (this.right) {
        this.right.dfsInOrder(arr);
    }
    return arr;
  }

  //////////// DFS: Post-Order ////////////
  // recursively step left
  // recursively step right
  // process node

  dfsPostOrder(arr = []) {
      if (this.left) {
          this.left.dfsPostOrder(arr);
      }
      if (this.right) {
          this.right.dfsPostOrder(arr);
      }
      arr.push(this.key);
      return arr;
  }
}



//////////// create new BST ////////////

const BST = new BinarySearchTree();
// original bST -> 25 15 50 10 24 35 70 4 12 18 31 44 66 90 22
function main() {
  BST.insert(25);
  BST.insert(15);
  BST.insert(50);
  BST.insert(10);
  BST.insert(24);
  BST.insert(35);
  BST.insert(70);
  BST.insert(4);
  BST.insert(12);
  BST.insert(18);
  BST.insert(31);
  BST.insert(44);
  BST.insert(66);
  BST.insert(90);
  BST.insert(22);

//   console.log(BST);

console.log(BST.dfsPreOrder()); // => 25, 15, 10, 4, 12, 24, 18, 22, 50, 35, 31, 44, 70, 66, 90

console.log(BST.dfsInOrder()); // => 4, 10, 12, 15, 18, 22, 24, 25, 31, 35, 44, 50, 66, 70, 90

console.log(BST.dfsPostOrder()); // => 4, 12, 10, 22, 18, 24, 15, 31, 44, 35, 66, 90, 70, 50, 25
}

main();

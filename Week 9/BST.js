class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

//          10
//       7       15
//    5    8   12  20
//
//

// Binary Search Tree
const node1 = new Node(10);
const node2 = new Node(7);
const node3 = new Node(15);
const node4 = new Node(5);
const node5 = new Node(8);
const node6 = new Node(12);
const node7 = new Node(20);

node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;
node3.left = node6;
node3.right = node7;


class BinarySearchTree {
  constructor() {
    this.root = null;
  }


  //     10
//     7    15
// 
//

  insert(newData) {
    const newNode = new Node(newData);

    if (this.root === null) {
      this.root = newNode;
    } else {
        this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  inOrderTraversal(node) {
    if (node === null) {
      return;
    }

    this.inOrderTraversal(node.left);
    console.log(node.data);
    this.inOrderTraversal(node.right);
  }

    // How can we find the minimum value in a BST ?
  findMin(node) {
    if (node.left === null) {
        return node;
    } else {
        // Keep on going towards left untill you find the node which has left as null
        return this.findMin(node.left);
    }
  }


  // How can we find the maximum value in a BST ?

  findMax(node) {
    if (node.right === null) {
        return node;
    } else {
        // Keep on going towards right untill you find the node which has right as null
        return this.findMax(node.right);
    }
  }

  isValidBST() {
    function isValid(node, min, max) {
        if (node === null) {
            return true;
        }

        if (node.data <= min || node.data >= max) {
            return false;
        }

        return isValid(node.left, min, node.data) && isValid(node.right, node.data, max);
    }

    console.log(this.root, 'root value ?');
    return isValid(this.root, -Infinity, Infinity);
  }

  // isValidBST, check it if it works with sorted value.

  // Search for a node ?

  search(target) {
    return this.searchNode(this.root, target)
  }

  searchNode(node, target) {
    if (node === null) {
        return false;
    }

    // If target is smaller go to left subtree
    if (target < node.data) {
        return this.searchNode(node.left, target);
        // if target is greater then go to right subtree
    } else if (target > node.data) {
        return this.searchNode(node.right, target);
    } else {
        // if target is equal to node.data return true
        return true;
    }
  }

  getRootNode() {
    return this.root;
  }

  // How would you validate if a tree is a BST ?

}
// Inorder Traversal

function inOrderTraversal(node) {
    if (node === null) {
        return;
    }

    inOrderTraversal(node.left);
    console.log(node.data);
    inOrderTraversal(node.right);
}


// Inserting Node in a BST

// helper function for Insertion 

// function insert(newData) {
//     const newNode = new Node(newData);

//     if (node1 === null) {
//         node1 = newNode;
//         return;
//     }
//     insertNode(node1, newNode);
//  }

// function insertNode(node, newNode) {
//  if (node.data < newData.data) {
//     if (node.left === null) {
//         node.left = newNode;
//     } else {
//         insertNode(node.left, newNode);
//     }
//  } else {
//     if (node.right === null) {
//         node.right = newNode;
//     } else {
//         insertNode(node.right , newNode);
//     }
//  }
// }

/// Create a BST

const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(1);
bst.insert(12); // This makes the tree invalid
bst.insert(20);

  //     10
//     7    15
// 
//

// 
// inOrderTraversal(node1);
console.log(bst.isValidBST());

// console.log(bst.search(1));
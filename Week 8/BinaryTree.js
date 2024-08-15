
class BinaryTreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


// Parent Node
let parentNode = new BinaryTreeNode(1);
let child1 = new BinaryTreeNode(2);
let child2 = new BinaryTreeNode(3);
let subChild1 = new BinaryTreeNode(4);
let subChild2 = new BinaryTreeNode(5);

parentNode.left = child1;
parentNode.right = child2;
child1.left = subChild1;
child1.right = subChild2;


function preOrderTraversal(rootNode) {
    if (!rootNode) {
        return;
    }

    // Explore the Root
    console.log(rootNode.value);
    // Explore the Left
    preOrderTraversal(rootNode.left);
    // Explore the Right
    preOrderTraversal(rootNode.right);
}

function inOrderTraversal(rootNode) {
    if (!rootNode) {
        return;
    }
 
    // Explore the left
    inOrderTraversal(rootNode.left);
    // Explore the Root
    console.log(rootNode.value);

    // Explore the Right
    inOrderTraversal(rootNode.right);

}

function postOrderTraversal(rootNode) {

    if (!rootNode) {
        return;
    }
 
    // Explore the left subtree
    postOrderTraversal(rootNode.left);
    // Explore the right subtree
    postOrderTraversal(rootNode.right);
    // Explore the root node
    console.log(rootNode.value);
}

// queue = []
// 1 2 3 4 5
function levelOrderTraversal(rootNode) {
    
    if (!rootNode) {
        return;
    }

    // We will make use of a queue
    const queue = [rootNode]; 

    while (queue.length > 0) {
        const currentNode = queue.shift();
        console.log(currentNode.value); // Print the value 
        if (currentNode.left) {
            queue.push(currentNode.left);
        }

        if (currentNode.right) {
            queue.push(currentNode.right);
        }

    }
}


// Questions 
// 1. Search a node in a binary Tree

function searchForNode(rootNode, target) {
    if (!rootNode) {
        return false;
    }

    // Explore the Root
    if (rootNode.value === target) {
        return true;
    }
    // Explore the Left
   return ( searchForNode(rootNode.left, target) || searchForNode(rootNode.right, target) )
}

// 2. Counting the number of Nodes

function countNodes(rootNode) {
    if (rootNode === null) {
        return 0;
    } else {
        return 1 + countNodes(rootNode.left) + countNodes(rootNode.right);
    }
}

// 3. Find the height of the binary Tree

function getHeight(parentNode) {
    if (parentNode === null) { 
        return 0;
    } else {
        const leftHeight = getHeight(parentNode.left);
        const rightHeight = getHeight(parentNode.right);

        return Math.max(leftHeight, rightHeight) + 1;
    }
}

// count = 1 + 1 + 1 + 0  + 1 + 1

// 1 2 3 4 5
const height = getHeight(parentNode);
console.log(height);


// Try Preorder, PostOrder, Inorder using Iterative Methods

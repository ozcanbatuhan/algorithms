class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    // Add element function
    insert(value) {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            return this;
        }
        let currentNode = this.root;
        while (true) {
            if (value < currentNode.value) {
                // Go left child tree
                if (currentNode.left === null) {
                    currentNode.left = newNode;
                    return this;
                }
                currentNode = currentNode.left;
            } else {
                // Go right child tree
                if (currentNode.right === null) {
                    currentNode.right = newNode;
                    return this;
                }
                currentNode = currentNode.right;
            }
        }
    }

    // Print tree with in-order traversal
    inOrderTraversal(node, result = []) {
        if (node) {
            this.inOrderTraversal(node.left, result);
            result.push(node.value);
            this.inOrderTraversal(node.right, result);
        }
        return result;
    }
}

const values = [7, 5, 1, 8, 3, 6, 0, 9, 4, 2];

const bst = new BinarySearchTree();
values.forEach(value => bst.insert(value));

const sortedValues = bst.inOrderTraversal(bst.root);
console.log(sortedValues);  
// Output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
